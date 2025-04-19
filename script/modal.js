const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const stateModal = document.getElementById("stateModal");
const serviceModal = document.getElementById("serviceModal");
const roomModal = document.getElementById("roomModal");
const frequencyModal = document.getElementById("frequencyModal");
const summaryModal = document.getElementById("summaryModal");
const dateModal = document.getElementById("dateModal");

// Navigation buttons
const backToState = document.getElementById("backToState");
const backToService = document.getElementById("backToService");
const backToRoom = document.getElementById("backToRoom");
const backToFrequency = document.getElementById("backToFrequency");
const backToSummary = document.getElementById("backToSummary");
const continueToDate = document.getElementById("continueToDate");

// State elements
const selectedState = document.getElementById("selectedState");
const selectedService = document.getElementById("selectedService");
const selectedRoom = document.getElementById("selectedRoom");
const summaryService = document.getElementById("summaryService");
const summaryRoom = document.getElementById("summaryRoom");
const summaryFrequency = document.getElementById("summaryFrequency");
const summaryPrice = document.getElementById("summaryPrice");

// Open modal
openModalBtn.addEventListener("click", () => {
  modalBackdrop.classList.remove("pointer-events-none");
  modalBackdrop.classList.add("pointer-events-auto");

  // Reset to state modal
  hideAllModals();
  stateModal.classList.remove("hidden");

  // Animate in
  setTimeout(() => {
    modalBackdrop.classList.remove("opacity-0");
    modalBackdrop.classList.add("opacity-100");

    stateModal.classList.remove("scale-95", "opacity-0");
    stateModal.classList.add("scale-100", "opacity-100");
  }, 10);
});

// Close modal
function closeModal() {
  modalBackdrop.classList.remove("opacity-100");
  modalBackdrop.classList.add("opacity-0");

  const currentModal = modalBackdrop.querySelector(".scale-100");
  if (currentModal) {
    currentModal.classList.remove("scale-100", "opacity-100");
    currentModal.classList.add("scale-95", "opacity-0");
  }

  setTimeout(() => {
    modalBackdrop.classList.remove("pointer-events-auto");
    modalBackdrop.classList.add("pointer-events-none");
    hideAllModals();
  }, 300);
}

// Hide all modals
function hideAllModals() {
  [
    stateModal,
    serviceModal,
    roomModal,
    frequencyModal,
    summaryModal,
    dateModal,
  ].forEach((modal) => {
    modal.classList.add("hidden");
    modal.classList.remove("scale-100", "opacity-100");
    modal.classList.add("scale-95", "opacity-0");
  });
}

// Transition between modals
function transitionModals(fromModal, toModal) {
  fromModal.classList.remove("scale-100", "opacity-100");
  fromModal.classList.add("scale-95", "opacity-0");

  setTimeout(() => {
    fromModal.classList.add("hidden");
    toModal.classList.remove("hidden");

    setTimeout(() => {
      toModal.classList.remove("scale-95", "opacity-0");
      toModal.classList.add("scale-100", "opacity-100");
    }, 10);
  }, 300);
}

// State selection
document.querySelector(".state-option").addEventListener("click", () => {
  selectedState.textContent = "Taraba State";
  transitionModals(stateModal, serviceModal);
});

// Service selection
document.querySelectorAll(".service-option").forEach((option) => {
  option.addEventListener("click", () => {
    selectedService.textContent = option.querySelector("span").textContent;
    summaryService.textContent = option.querySelector("span").textContent;
    transitionModals(serviceModal, roomModal);
  });
});

// Room selection
document.querySelectorAll(".room-card").forEach((card) => {
  card.addEventListener("click", () => {
    selectedRoom.textContent = card.querySelector("h4").textContent;
    summaryRoom.textContent = card.querySelector("h4").textContent;
    summaryPrice.textContent = card
      .querySelector("p:last-child")
      .textContent.trim();
    transitionModals(roomModal, frequencyModal);
  });
});

// Frequency selection
document.querySelectorAll(".frequency-option").forEach((option) => {
  option.addEventListener("click", () => {
    summaryFrequency.textContent = option.querySelector("span").textContent;
    transitionModals(frequencyModal, summaryModal);
  });
});

// Navigation back buttons
backToState.addEventListener("click", () =>
  transitionModals(serviceModal, stateModal)
);
backToService.addEventListener("click", () =>
  transitionModals(roomModal, serviceModal)
);
backToRoom.addEventListener("click", () =>
  transitionModals(frequencyModal, roomModal)
);
backToFrequency.addEventListener("click", () =>
  transitionModals(summaryModal, frequencyModal)
);
backToSummary.addEventListener("click", () =>
  transitionModals(dateModal, summaryModal)
);

// Continue to date selection
continueToDate.addEventListener("click", () =>
  transitionModals(summaryModal, dateModal)
);

// Close modal events
closeModalBtn.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) {
    closeModal();
  }
});

// Close with Escape key
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    modalBackdrop.classList.contains("pointer-events-auto")
  ) {
    closeModal();
  }
});
