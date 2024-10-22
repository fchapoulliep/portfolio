/**
 * Function to scroll to the top of the page
 */
const handleScrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const cursor = document.querySelector(".cursor") as HTMLElement;
  if (cursor) {
    cursor.style.top = "52px";
  }
};

export default handleScrollTop;
