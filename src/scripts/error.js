const redirectToHomePage = () => {
  const button = document.querySelector(".new-search__button");
  button.addEventListener("click", () => {
    window.location.href = "../../index.html"  });
};


redirectToHomePage()