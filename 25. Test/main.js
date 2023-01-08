/*Trigger Element at the middle of the page*/
const triggerElement = document.getElementById("triggerElement");
const topRightModal = document.getElementById("top-right-modal");

triggerElement.addEventListener("click", () => {
  topRightModal.classList.toggle("hidden");
});

/*Close button*/
const topRightModalClose = document.getElementById("top-right-modal-close");

topRightModalClose.addEventListener("click", () => {
  topRightModal.classList.toggle("hidden");
});