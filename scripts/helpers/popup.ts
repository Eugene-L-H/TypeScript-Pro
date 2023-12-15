// Remove popup window from the DOM.
export function closePopup(): void {
  const popup: HTMLElement | null = document.querySelector(".popup");
  const main: HTMLElement | null = document.querySelector("main");

  // Remove the popup, back to default view.
  if (popup) {
    popup.remove();
  }

  // Remove the blur effect from the screen once popup disappears.
  if (main) {
    main.classList.remove("blur");
  }
}

// Add functionality for the close popup button.
export function closePopupButton(): void {
  const closeButton: HTMLElement | null =
    document.querySelector(".close-popup");

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      closePopup();
    });
  }
}

// Blur the main content area.
export function blurMainToggle(): void {
  const main: HTMLElement | null = document.querySelector("main");

  // Toggle the blur effect on the app, behind the popup.
  if (main) {
    main.classList.toggle("blur");
  }
}
