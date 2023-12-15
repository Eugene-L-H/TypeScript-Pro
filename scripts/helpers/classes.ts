export class Task {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  priority: number;
  project: string;
  checked: boolean;

  constructor(
    id: string,
    name: string,
    description: string,
    dueDate: string,
    priority: number,
    project: string,
    checked: boolean
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.checked = false;
  }
}

export class Project {
  id: string;
  name: string;
  description: string;
  deadline: string;
  priority: number;

  constructor(
    id: string,
    name: string,
    description: string,
    deadline: string,
    priority: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.deadline = deadline;
    this.priority = priority;
  }
}
