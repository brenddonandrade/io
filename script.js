const element = document.querySelector("#works-content");

element.addEventListener("wheel", (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
  });
});
