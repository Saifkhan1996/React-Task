import React, { useState } from "react";
import "./Assignment.css";

const Assignment = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [taskName, setTaskName] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const [description, setDescription] = useState("");

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    setProjects([...projects, { name: selectedProject, tasks: [] }]);
    setSelectedProject("");
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const updatedProjects = projects.map((project) => {
      if (project.name === selectedProject) {
        project.tasks.push({ name: taskName, timeSpent, description });
      }
      return project;
    });
    setProjects(updatedProjects);
    setTaskName("");
    setTimeSpent("");
    setDescription("");
  };
  return (
    <div className="container">
      <h2>Create a Project</h2>
      <form onSubmit={handleProjectSubmit}>
        <label htmlFor="projectName">Project Name:</label>
        <input
          className="nameInpt"
          type="text"
          id="projectName"
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
        />
        <button className="createBtn" type="submit">
          Create Project
        </button>
      </form>
      <h2>Create a Task</h2>
      <form onSubmit={handleTaskSubmit}>
        <label className="slp" htmlFor="projectSelect">
          Select a Project:
        </label>
        <select
          className="slct"
          id="projectSelect"
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
        >
          <option value="">--Select a Project--</option>
          {projects.map((project) => (
            <option key={project.name} value={project.name}>
              {project.name}
            </option>
          ))}
        </select>
        <br />
        <label className="tsknm" htmlFor="taskName">
          Task Name:
        </label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <br />
        <label className="timespnt" htmlFor="timeSpent">
          Time Spent:
        </label>
        <input
          className="inpttimespent"
          type="text"
          id="timeSpent"
          value={timeSpent}
          onChange={(e) => setTimeSpent(e.target.value)}
        />
        <br />
        <label className="desc" htmlFor="description">
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <button className="taskBtn" type="submit">
          Add Task
        </button>
      </form>
      <h2>Project Listing</h2>
      {projects.map((project) => (
        <div key={project.name}>
          <h3>{project.name}</h3>
          <ul>
            {project.tasks.map((task) => (
              <li key={task.name}>
                {task.name} - {task.timeSpent} - {task.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Assignment;
