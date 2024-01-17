const fetchUserData = () => {
  const button = document.querySelector(".index__button");
  const input = document.querySelector(".index__input");
  button.addEventListener("click", async () => {
    const userName = input.value;
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("githubUserInfo", JSON.stringify(data));
        window.location.href = "./src/pages/profile.html";
      } else {
        window.location.href = "./src/pages/error.html";
      }
    } catch (error) {
      console.error('Fetch error:', error);
      window.location.href = "./src/pages/error.html";;
    }
  });
};

fetchUserData();
