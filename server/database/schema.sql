CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    due_date DATE,
    priority INTEGER,
    project_id INTEGER REFERENCES projects(id),
    checked BOOLEAN DEFAULT FALSE
);

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    deadline DATE,
    priority INTEGER
);
