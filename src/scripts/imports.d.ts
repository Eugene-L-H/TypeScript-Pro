import {
  projectsArray,
  tasksArray,
  updateProjectsArray,
  updateTasksArray,
  deleteIconFunctionality
} from "./helpers/state.js";

// For populating tasks/projects array with examples.
import { populateTaskArray, populateProjectArray } from "./example-arrays.ts";

// Dark mode toggle.
import { darkMode } from "./helpers/dark-mode.ts";

import { menuFunctionality } from "./mobile-menu.ts";

// For populating content area with tasks.
import {
  tasksStorageToDisplay,
  displayTasks,
  taskDateButtons,
  taskPopupFunctionality,
  taskCardFunctionality,
  taskDOMobject
} from "./tasks.js";

import {
  populateLocalProjectsArray,
  submitProjectButton,
  displayProject,
  projectDisplayTasks,
  addNewProjectPopup
} from "./project.ts";

import { Project, Task } from "./helpers/classes.ts";

// Functions for handling the popups.
import {
  closePopup,
  closePopupButton,
  blurMainToggle
} from "./helpers/popup.ts";

import { updateWeather } from "./helpers/weather.ts";

// Functions for sorting arrays by due date, and priority.
import { sortArrayByDate, sortArrayByPriority } from "./helpers/sortArrays.ts";

import {
  isDueInTimeFrame,
  getFormattedDate,
  isThisYear
} from "./helpers/compare-dates.ts";

import { sanitizeInput } from "./helpers/sanitizeInput.ts";

export {
  projectsArray,
  tasksArray,
  updateProjectsArray,
  updateTasksArray,
  deleteIconFunctionality,
  populateTaskArray,
  populateProjectArray,
  darkMode,
  menuFunctionality,
  tasksStorageToDisplay,
  displayTasks,
  taskDateButtons,
  taskPopupFunctionality,
  taskCardFunctionality,
  taskDOMobject,
  populateLocalProjectsArray,
  submitProjectButton,
  displayProject,
  projectDisplayTasks,
  addNewProjectPopup,
  Project,
  Task,
  closePopup,
  closePopupButton,
  blurMainToggle,
  updateWeather,
  sortArrayByDate,
  sortArrayByPriority,
  isDueInTimeFrame,
  getFormattedDate,
  isThisYear,
  sanitizeInput
};
