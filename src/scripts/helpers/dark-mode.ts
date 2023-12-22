export function darkMode() {
  const body: HTMLElement | null = document.querySelector("body");
  const darkModeIcon: HTMLElement | null =
    document.querySelector("#dark-mode-icon");

  if (body && darkModeIcon) {
    darkModeIcon.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
    });
  }
}
