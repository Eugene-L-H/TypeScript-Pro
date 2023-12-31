import {
  deleteIconFunctionality,
  projectsArray,
  updateProjectsArray,
  closePopup,
  tasksArray,
  populateProjectArray,
  blurMainToggle,
  sanitizeInput,
  taskPopupFunctionality,
  taskDOMobject,
  taskCardFunctionality,
  Project,
  Task
} from "./imports.js";

// Check local storage for projects. Add them to the sidebar.
export function populateLocalProjectsArray(): void {
  // Update local projects array with projects from local storage.
  if (localStorage.getItem("projectsArray") !== null) {
    updateProjectsArray(JSON.parse(localStorage.getItem("projectsArray")!));

    // If local storage is empty, populate with example projects.
  } else {
    updateProjectsArray(populateProjectArray(5));
    location.reload();
  }
}

// Popup form for creating a new project.
export function addNewProjectPopup() {
  const popupHTML = `
    <div class="popup">
      <div class="popup-header project">
       <span class="popup-title project">NEW PROJECT</span>
        <span class="close-popup">&times;</span>
      </div>
      <div class="popup-body">
        <label for="project-name-popup">Project Name:</label>
        <input type="text" id="project-name-popup" placeholder="Project Name" />
        <label for="project-description">Description:</label>
        <textarea
          rows="4" 
          id="project-description"
          placeholder="Project Description"
        ></textarea>
        <label for="project-priority">Priority:</label>
        <select id="project-priority">
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
        <label for="project-deadline">Deadline (Optional):</label>
        <input type="date" id="project-deadline" placeholder="Deadline" />
        <button id="submit-project">Add Project</button>
      </div>
    </div>
  `;

  return popupHTML;
}

// HTML to display project in the main content area.
export function displayProject(project: Project): string {
  // Get the priority of the project.
  let priority = "Low";
  switch (project.priority) {
    case 3:
      priority = "High";
      break;
    case 2:
      priority = "Medium";
      break;
    default:
      break;
  }

  const projectHTML = `
  <div class="project-card">
    <div class="project-info">
      <div class="project-card-header">
        <h3 id="project-name" data-name="${sanitizeInput(project.name)}">
          <span class="project-name-prefix">Project:&nbsp;</span>
          ${sanitizeInput(project.name)}
        </h3>
      </div>
      <div class="project-card-body">
        <span class="project-description">
          ${sanitizeInput(project.description)}
        </span>
        <div class="deadline-priority">
          <div class="project-deadline">
            <span class="project-deadline-label">Deadline:</span>
            <span class="project-deadline-value">${project.deadline}</span>
          </div>
          <div class="project-priority">
            <span class="project-priority-label">Priority:</span>
            <span class="project-priority-value">&nbsp;${priority}</span>
          </div>
        </div>
      </div>
      <div class="modify-project">
        <button id="add-task-project" class="new-post-button">+<br>Add<br>Task</button>
        <span class="project-delete-icon delete-icon" data-name="${sanitizeInput(
          project.name
        )}" data-id="${project.id}"
          data-project="project">✖</span>
      </div>
    </div>
    <div id="project-tasks">
      <div class="project-task-label-line">
      </div>
      <div class="tasks-container tasks-container-project">
        <ul id="task-list"></ul>
      </div>
    </div>
  </div>
  `;

  return projectHTML;
}

/**
 * Displays tasks for a project.
 * @param {Object} project - Project object.
 * @param {Array} tasks - Tasks array.
 * @returns {String} inserts HTML for the tasks.
 */
export function projectDisplayTasks(project: Project, tasks: Task[]): void {
  const taskListHTML: HTMLElement | null = document.querySelector("#task-list");

  if (taskListHTML) {
    taskListHTML.innerHTML = "";
    let tasksFound = false; // Flag to check if tasks were found.

    // Loop through tasksArray and find tasks that match the project name.
    tasks.forEach(task => {
      if (project.name === task.project) {
        taskListHTML.appendChild(taskDOMobject(task));
        // Set flag to true
        tasksFound = true;
      }
    });

    // If no tasks were found, display message.
    if (!tasksFound) {
      const noTasksHTML = `
        <li class="task-list-item">
          <p class="no-tasks">No tasks found for this project.</p>
        </li>
      `;

      // Add message to each project task list, mobile and and desktop app.
      taskListHTML.innerHTML = noTasksHTML;
      taskListHTML.classList.add("no-tasks");

      // Add functionality to the delete icon for the project card.
      deleteIconFunctionality();
    }
  } else {
    // Add functionality to task cards.
    taskCardFunctionality();
  }
}

export function submitProjectButton(): void {
  const submitButton: HTMLElement | null =
    document.querySelector("#submit-project");
  const contentArea: HTMLElement | null =
    document.querySelector("#content-area");

  if (submitButton && contentArea) {
    submitButton.addEventListener("click", () => {
      // Get the values from the form.
      const id = `id${Date.now()}`;

      // Get name data entered by user, from the html.
      let projectName: string = "";
      let projectNameData: HTMLSelectElement | null = document.querySelector(
        "#project-name-popup"
      );
      if (projectNameData) projectName = projectNameData.value;

      // Get description data entered by user, from the html.
      let projectDescription: string = "";
      let projectDescriptionData: HTMLSelectElement | null =
        document.querySelector("#project-description");
      if (projectDescriptionData)
        projectDescription = projectDescriptionData.value;

      // Get priority data entered by user, from the html.
      let projectPriority: number = 1;
      let projectPriorityData: HTMLSelectElement | null =
        document.querySelector("#project-priority");
      if (projectPriorityData)
        projectPriority = Number(projectPriorityData.value);

      // Get deadline data entered by user, from the html.
      let projectDeadlineData: HTMLSelectElement | null =
        document.querySelector("#project-deadline");
      let projectDeadline: string = "No deadline";
      if (projectDeadlineData) projectDeadline = projectDeadlineData.value;

      // Sanitize the input.
      projectName = sanitizeInput(projectName);
      projectDescription = sanitizeInput(projectDescription);

      // Create a new project.
      const project = new Project(
        id,
        projectName,
        projectDescription,
        projectDeadline,
        projectPriority
      );

      // Add the project to the projects array.
      projectsArray.push(project);
      localStorage.setItem("projectsArray", JSON.stringify(projectsArray));

      // Display new project in main area.
      // Clear the mobile div, load project card, and associated tasks.
      contentArea.innerHTML = "";
      blurMainToggle(); // Remove blur from the main screen.
      contentArea.insertAdjacentHTML("afterbegin", displayProject(project));
      taskPopupFunctionality("project", project); // Add task popup functionality.
      projectDisplayTasks(project, tasksArray);

      closePopup();
    });
  }
}
