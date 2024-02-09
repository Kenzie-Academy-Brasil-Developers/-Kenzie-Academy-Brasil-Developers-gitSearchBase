const getUserFromLocalStorage = () => {
  const info = localStorage.getItem("githubUserInfo");
  const dados = JSON.parse(info);
  return dados;
};

const object = getUserFromLocalStorage();

const renderUserInfo = (objetc) => {
  const avatar = objetc.avatar_url;
  const login = objetc.login;

  const profile = document.querySelector(".profile__info");
  const img = document.createElement("img");
  const userName = document.createElement("p");

  profile.classList.add("profile__info");
  img.classList.add("profile__image");
  userName.classList.add("profile__username");

  img.src = avatar;
  img.alt = "user";
  userName.innerText = login;

  profile.append(img, userName);

  const button = document.querySelector(".profile__change-user--button");
  button.addEventListener("click", () => {
    window.location.replace("../../index.html");
    localStorage.removeItem("githubUserInfo");
  });

  return profile;
};

renderUserInfo(object);

const renderUserRepos = async () => {
  const login = object.login;
  const repos = await fetch(
    `https://api.github.com/users/${login}/repos`);
  const repositorios = await repos.json();

  const ul = document.querySelector(".profile__ul");

  repositorios.forEach((repos) => {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    const a = document.createElement("a");

    h4.innerText = repos.name;
    p.innerText = repos.description || "Repositório sem descrição";
    a.innerText = "Repositório";
    a.href = repos.html_url;
    a.target = "_blank";

    li.append(h4, p, a);
    ul.appendChild(li);
  });
};

renderUserRepos();
