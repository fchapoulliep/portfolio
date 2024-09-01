const handleNavigationBarBackgroudChange = () => {
  const nav = document.querySelector(".nav-bar");

  if (window.scrollY > 20) {
    nav?.classList.add("background");
  } else {
    nav?.classList.remove("background");
  }
    window.addEventListener("scroll", handleNavigationBarBackgroudChange);

    return () => {
        window.removeEventListener("scroll", handleNavigationBarBackgroudChange);
    }
};

export default handleNavigationBarBackgroudChange;
