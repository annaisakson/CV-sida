// Select all project cards and the modal element
const projectCards = document.querySelectorAll(".project-cards");
const modal = document.querySelector(".modal");
const closeButton = modal.querySelector(".close");

// Function to open the modal
function openModal(modalContent) {
  modal.innerHTML = modalContent;
  fadeIn(modal);

  // Add event listener to the new close button
  modal.querySelector(".close").addEventListener("click", closeModal);
}

// Function to close the modal
function closeModal() {
  fadeOut(modal);
}

// Add click event to all project cards
projectCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    // Fetch the content of the corresponding inner modal
    const innerModalId = `inner-modal-${index + 1}`;
    const innerModal = document.getElementById(innerModalId);

    if (innerModal) {
      // If the inner modal exists, use its content
      openModal(innerModal.innerHTML);
    } else {
      console.error(`Modal content not found for id: ${innerModalId}`);
    }
  });
});

function fadeOut(element) {
  var opacity = 1;
  function decrease() {
    opacity -= 0.05;
    if (opacity <= 0) {
      //complete
      element.style.opacity = 0;
      element.classList.remove("is-open");
      return true;
    }
    element.style.opacity = opacity;
    requestAnimationFrame(decrease);
  }
  decrease();
}

function fadeIn(element) {
  var opacity = 0;
  element.classList.add("is-open");
  function increase() {
    opacity += 0.05;
    if (opacity >= 1) {
      //complete
      element.style.opacity = 1;
      return true;
    }
    element.style.opacity = opacity;
    requestAnimationFrame(increase);
  }
  increase();
}
