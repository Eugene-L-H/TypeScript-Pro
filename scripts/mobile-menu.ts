import {
  blurMainToggle,
  projectsArray,
  tasksArray,
  displayTasks,
  taskPopupFunctionality,
  displayProject,
  projectDisplayTasks,
  addNewProjectPopup,
  closePopupButton,
  submitProjectButton,
  Project
} from "./imports.js";

// Flag to determine if the mobile menu is open or closed.
let menuOpen: boolean = false;

// Flag to determine if project list is open or closed.
let projectsOpen: boolean = false;

/**
 * Add functionality to the hamburger icon (mobile menu).
 */
export function menuFunctionality(): void {
  const hamburgerIcon: HTMLElement | null =
    document.querySelector("#hamburger-icon");
  const wideScreenMenu: HTMLElement | null =
    document.querySelector("#wide-screen-menu");

  if (hamburgerIcon && wideScreenMenu) {
    hamburgerIcon.addEventListener("click", () => {
      toggleBlurAndPopups();
    });

    wideScreenMenu.addEventListener("click", () => {
      toggleBlurAndPopups();
    });
  }

  projectsOpen = false;
}

// HTML for mobile menu.
function mobileMenuHTML(): string {
  const mobileMenuHTML = `
  <div id="mobile-menu">
  <span id="mobile-dates-label" class="mobile-label">TASKS</span>
  <span id="mobile-menu-close" class="close-popup">&times;</span>
    <div class="mobile-dates">
      <button id="mobile-today" class="mobile-date-selector">Today</button>
      <button id="mobile-week" class="mobile-date-selector">This<br>Week</button>
      <button id="mobile-month" class="mobile-date-selector">This<br>Month</button>
      <button id="mobile-year" class="mobile-date-selector">This<br>Year</button>
    </div>
    <button id="mobile-add-task" class="add-task-button">+<br>Add<br>Task</button>
    <span class="mobile-label project">PROJECTS</span>
    <div id="mobile-project-button-container">
      <button id="mobile-view-projects-button" class="mobile-projects-button">Projects</button>
      <button id="mobile-add-project-button" class="mobile-projects-button">+ Add&nbsp;<br>Project</button>
    </div>
    <ul id="mobile-menu-projects" class="hidden">
    </ul>
  </div>
  `;

  return mobileMenuHTML;
}

function toggleBlurAndPopups(): void {
  removePopup(); // Remove the popup if it is open.
  blurMainToggle();
  mobileMenuToggle();
}

// Toggle the mobile menu open/closed.
function mobileMenuToggle(): void {
  const body = document.querySelector("body");

  if (menuOpen) {
    const mobileMenu: HTMLElement | null =
      document.querySelector("#mobile-menu");

    if (mobileMenu) {
      mobileMenu.remove();
    }

    // Display the mobile menu. Add event listener for projects button.
  } else {
    if (body) {
      body.insertAdjacentHTML("afterbegin", mobileMenuHTML());
    }
    // Add event listeners for the menu buttons.
    mobileMenuCloseButton();
    mobileMenuDates();
    mobileMenuAddTask();
    mobileMenuProjects();
    mobileMenuAddProject();
  }

  // Toggle the menu open/closed.
  menuOpen ? (menuOpen = false) : (menuOpen = true);

  // Toggle the projects list open/closed. Set to closed by default.
  projectsOpen = false;
}

// Event listeners for the task date-range buttons.
function mobileMenuDates(): void {
  // Get the date-range buttons.
  const todayButton: HTMLElement | null =
    document.querySelector("#mobile-today");
  const weekButton: HTMLElement | null = document.querySelector("#mobile-week");
  const monthButton: HTMLElement | null =
    document.querySelector("#mobile-month");
  const yearButton: HTMLElement | null = document.querySelector("#mobile-year");

  if (todayButton) {
    todayButton.addEventListener("click", () => {
      displayTasks("today", true);
      mobileMenuClose();
    });
  }

  if (weekButton) {
    weekButton.addEventListener("click", () => {
      displayTasks("week", true);
      mobileMenuClose();
    });
  }

  if (monthButton) {
    monthButton.addEventListener("click", () => {
      displayTasks("month", true);
      mobileMenuClose();
    });
  }

  if (yearButton) {
    yearButton.addEventListener("click", () => {
      displayTasks("year", true);
      mobileMenuClose();
    });
  }
}

function mobileMenuCloseButton(): void {
  const closeButton: HTMLElement | null =
    document.querySelector("#mobile-menu-close");

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      toggleBlurAndPopups();
    });
  }
}

// + Add Task button event listener. Calls popup.
function mobileMenuAddTask(): void {
  const addTaskButton: HTMLElement | null =
    document.querySelector("#mobile-add-task");
  taskPopupFunctionality("main-menu");

  if (addTaskButton) {
    addTaskButton.addEventListener("click", () => {
      mobileMenuClose();
      blurMainToggle(); // Remove blur from the main screen.
    });
  }
}

/* Event listener for projects button. Populates the projects list with project names. */
function mobileMenuProjects(): void {
  const projectsButton: HTMLElement | null = document.querySelector(
    ".mobile-projects-button"
  );
  const projectList: HTMLElement | null = document.querySelector(
    "#mobile-menu-projects"
  );

  // Check if projects present in projectsArray.
  const projectsPresent = projectsArray.length > 0 ? true : false;

  if (projectsButton && projectList) {
    projectsButton.addEventListener("click", () => {
      // If the projects list is open, close it.
      if (projectsOpen) {
        projectList.classList.toggle("hidden");
        projectList.innerHTML = "";
        projectsButton.textContent = "Projects";

        // Populate the projects list with project names.
      } else {
        const contentArea: HTMLElement | null =
          document.querySelector("#content-area");

        // If no projects present, display message.
        if (!projectsPresent) {
          projectList.classList.toggle("hidden");
          projectList.insertAdjacentHTML(
            "afterbegin",
            `<p class="no-projects-message">No Projects Found</p>`
          );
        } else {
          projectList.classList.toggle("hidden");

          // If projects present, display projects list.
          projectsArray.forEach((project: Project) => {
            // Create a list item element for each project name.
            const projectName: HTMLElement = document.createElement("li");
            const button: HTMLElement = document.createElement("button");
            button.classList.add("mobile-project-button");
            button.textContent = project.name;
            projectName.appendChild(button);

            // Add name as list item to the projects list.
            projectList.appendChild(projectName);

            // Add event listener for each project name.
            projectName.addEventListener("click", () => {
              // Clear the mobile div, load project card, and associated tasks.
              if (contentArea) {
                contentArea.innerHTML = "";
                mobileMenuClose();
                contentArea.insertAdjacentHTML(
                  "afterbegin",
                  displayProject(project)
                );
                console.log("Project: ", project);
                taskPopupFunctionality("project", project); // Add task popup functionality.
                projectDisplayTasks(project, tasksArray);
              }
            });
          });
        }
      }

      // Change the projects button text upon clicking.
      projectsButton.textContent = "Close";

      // Toggle the projects list open/closed.
      projectsOpen ? (projectsOpen = false) : (projectsOpen = true);
    }); // <-- Add this closing parenthesis
  }
}

function mobileMenuAddProject(): void {
  const body: HTMLElement | null = document.querySelector("body");
  const addNewProjectButton: HTMLElement | null = document.querySelector(
    "#mobile-add-project-button"
  );

  if (body && addNewProjectButton) {
    addNewProjectButton.addEventListener("click", () => {
      // Add the popup HTML to the DOM.
      const popupHTML = addNewProjectPopup();
      body.insertAdjacentHTML("afterbegin", popupHTML);

      // Add functionality to the close popup button.
      closePopupButton();
      blurMainToggle(); // Counter the blurMainToggle in closePopupButton.

      // Add functionality to the submit project button.
      submitProjectButton(Project);
      mobileMenuClose(); // Close the mobile menu.
    });
  }
}

// Remove mobile menu from DOM, reset flag
function mobileMenuClose(): void {
  const mobileMenu: HTMLElement | null = document.querySelector("#mobile-menu");

  if (mobileMenu) {
    mobileMenu.remove();
    blurMainToggle(); // Remove blur from the main screen.
    menuOpen = false;
  }
}

function removePopup(): void {
  const popup = document.querySelector(".popup");
  if (popup) {
    popup.remove();
    blurMainToggle();
  }
}
