import { Task, Project } from "./imports.js";

export function populateExampleArray(
  type: string,
  numberOfObjects: number
): Array<Task | Project> {
  const exampleArray: Array<Task | Project> = [];

  for (let i = 0; i < numberOfObjects; i++) {
    // Populate the array with tasks, or projects, according ot type argument.
    const object: Task | Project =
      type === "task" ? exampleTask(i) : exampleProject(i);
    exampleArray.push(object);
  }

  return type === "task"
    ? (exampleArray as Task[])
    : (exampleArray as Project[]);
}

function exampleTask(iteration: number): Task {
  const randomChecked = Math.floor(Math.random() * 4);

  let dateRange = returnDateRange(iteration);

  // let project = Math.floor(Math.random() * 5) + 1;

  const task = new Task(
    `id${Date.now() + iteration}`, // id
    generateRandomTask(), // name
    generateLoremIpsumSentence(), // description
    randomDueDate(dateRange), // due date
    Math.floor(Math.random() * 3) + 1, // priority
    projectNameGenerator(iteration, "task"), // project
    randomChecked === 3 ? true : false // checked
  );
  return task;
}

function exampleProject(iteration: number): Project {
  const project = new Project(
    `id${Date.now() + iteration}`, // Unique ID
    projectNameGenerator(iteration, "project"), // Project name
    generateLoremIpsumSentence(), // Project description
    "No Deadline.", // Project deadline
    Math.floor(Math.random() * 3) + 1 // Project priority level
  );

  return project;
}

// Helper functions ---------------------------------------------- //

function returnDateRange(iteration: number): string {
  let dateRange: string = "";

  // Assign date range to task, based on iteration.
  if (iteration < 3) {
    dateRange = "today";
  } else if (iteration < 8) {
    dateRange = "week";
  } else if (iteration < 12) {
    dateRange = "month";
  } else if (iteration < 16) {
    dateRange = "year";
  }

  return dateRange;
}

function generateSpecificDate(daysFromToday: number): string {
  const date = new Date(); // Today's date
  date.setDate(date.getDate() + daysFromToday); // Add 'daysFromToday' to the current date

  const year = date.getFullYear();
  let month = String(date.getMonth() + 1);
  let day = String(date.getDate());

  if (month.length < 2) {
    month = "0" + month;
  }

  if (day.length < 2) {
    day = "0" + day;
  }

  return `${year}-${month}-${day}`;
}

function randomDueDate(dateRange: string): string {
  let days = 0;

  switch (dateRange) {
    case "today":
      days = 0;
      break;
    case "week":
      days = 7;
      break;
    case "month":
      days = 30;
      break;
    case "year":
      days = 365;
      break;
    default:
      days = 0;
      break;
  }

  const random: number = Math.floor(Math.random() * days);

  return generateSpecificDate(random);
}

// Lorem sentences for task descriptions
function generateLoremIpsumSentence(): string {
  const loremIpsumSentences = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui of.",
    "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
    "Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
    "Integer in mauris eu nibh euismod gravida.",
    "Duis ac tellus et risus vulputate vehicula.",
    "Donec lobortis risus a elit. Etiam tempor.",
    "Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis.",
    "Maecenas fermentum consequat mi. Donec fermentum.",
    "Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec.",
    "Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing.",
    "Cras mollis scelerisque nunc. Nullam arcu."
  ];

  const randomIndex: number = Math.floor(
    Math.random() * loremIpsumSentences.length
  );
  return loremIpsumSentences[randomIndex];
}

function generateRandomTask(): string {
  const exampleTasks = [
    "Order groceries online",
    "Schedule virtual fitness class",
    "Update LinkedIn profile",
    "Research online courses for skill development",
    "Plan a weekend hiking trip",
    "Book Airbnb for next vacation",
    "Start a personal blog",
    "Attend a networking event",
    "Prepare a healthy meal plan for the week",
    "Watch a webinar on investment strategies",
    "Clean out email inbox",
    "Organize a virtual game night with friends",
    "Research sustainable living tips",
    "Plan a budget for the month",
    "Write a journal entry",
    "Practice a new language on a learning app",
    "Backup digital photos and files",
    "Explore new music on streaming platforms",
    "Create a vision board",
    "Sign up for a creative writing workshop",
    "Do a DIY home decor project",
    "Plan a coffee catch-up over video call",
    "Try a new recipe",
    "Read a chapter of a self-help book",
    "Do a 10-minute meditation session",
    "Watch a trending documentary",
    "Start a 30-day fitness challenge",
    "Plan outfits for the week",
    "Learn a new song on a musical instrument",
    "Research local volunteer opportunities",
    "Organize a closet",
    "Plan a small balcony garden",
    "Create a playlist for different moods",
    "Look for new podcasts for the daily commute",
    "Update personal budget spreadsheet",
    "Try out a new coffee shop",
    "Plan a day trip to a nearby town",
    "Research meal prep ideas",
    "Work on a puzzle",
    "Look for online side gig opportunities",
    "Write a letter to a friend",
    "Plan a themed movie night",
    "Research the latest fashion trends",
    "Schedule a home spa day",
    "Create a list of goals for the year",
    "Check out a new restaurant in town",
    "Attend a virtual art class",
    "Explore a part of the city you've never been to",
    "Start a gratitude journal",
    "Make avocado toast",
    "Have existential crisis"
  ];

  const getRandomTask = () =>
    exampleTasks[Math.floor(Math.random() * exampleTasks.length)];

  return getRandomTask();
}

function projectNameGenerator(iteration: number, locationCall: string): string {
  const projectNames = [
    "Wellness Expedition",
    "Lifestyle Navigator",
    "Adventure Blueprint",
    "Work/Life Balance",
    "Personal Growth"
  ];

  let projectName: string = "";

  if (locationCall === "task") {
    projectName = projectNames[Math.floor(Math.random() * projectNames.length)];
  } else if (locationCall === "project") {
    projectName = projectNames[iteration];
  }

  return projectName;
}
