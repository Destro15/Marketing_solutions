const openButton = document.querySelector("[data-open-modal]")
const modal = document.querySelector("[data-modal]")

openButton.addEventListener("click", () => {
    modal.showModal()
})

document.body.classList.add('blur');
document.body.classList.remove('blur');


modal.addEventListener("click", e => {
    const dialogDimensions = modal.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close()
    }
  })