let users = [];
const usersContainer = document.getElementById("usersContainer");
const emailInput = document.getElementById("email");
const NameInput = document.getElementById("name");

const addUser = () => {
  NameValue = NameInput.value;
  emailValue = emailInput.value;

  if (NameValue.trim() !== "" && emailValue.trim() !== "") {
    console.log("fields are filled");
    checkUser(emailValue);
    resetFields();
  } else {
    console.log("fields are not filled");
    document.getElementById("alert").classList.remove("opacity-0");
    document.getElementById("alertMsg").innerHTML =
      "Please fill all the fields.";
    resetFields();

    setTimeout(() => {
      document.getElementById("alert").classList.add("opacity-0");
      document.getElementById("alertMsg").innerHTML =
        '<span id="alertMail" class="font-bold">userid</span> already registered.';
    }, 2000);
  }
};

const checkUser = (newEmail) => {
  if (users.some((email) => email.email == newEmail)) {
    console.log("the email already exists");
    console.log(users);
    document.getElementById("alert").classList.remove("opacity-0");
    document.getElementById("alertMail").innerText = emailValue;

    setTimeout(() => {
      document.getElementById("alert").classList.add("opacity-0");
    }, 2000);
  } else {
    users.push({
      name: NameValue,
      email: emailValue,
    });
    console.log("email added");
    console.log(users);

    renderUser();
  }
};

const renderUser = () => {
  usersContainer.innerHTML = "";

  users.forEach((user) => {
    let div = document.createElement("div");
    let name = document.createElement("p");
    let email = document.createElement("p");

    usersContainer.append(div);
    div.appendChild(name);
    div.appendChild(email);

    name.innerText = user.name;
    email.innerText = user.email;

    div.classList.add("user");
    name.classList.add("capitalize");
  });
};

const resetFields = () => {
  NameInput.value = "";
  emailInput.value = "";
};
