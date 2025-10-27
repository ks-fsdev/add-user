let users = [];
let usersContainer = document.getElementById("usersContainer");

const renderUser = () => {
  usersContainer.innerHTML = "";
  users.forEach((user) => {
    let div = document.createElement("div");
    let name = document.createElement("p");
    let email = document.createElement("p");
    div.classList.add("user");
    name.innerText = user.name;
    email.innerText = user.email;
    usersContainer.appendChild(div);
    div.append(name);
    div.append(email);
  });
};

const btn = document.getElementById("btn");

const addUser = () => {
  nameInput = document.getElementById("name");
  emailInput = document.getElementById("email");

  btn.addEventListener("click", () => {});
  users.push({
    name: nameInput.value,
    email: email.value,
  });

  console.log(users);

  renderUser();
};
