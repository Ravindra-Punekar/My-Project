import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./SideNav.module.css"

function SideNav({ addNewTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title };

    try {
      // Perform any validation here if needed
      if (!title) {
        alert("Please enter a task title.");
        return;
      }

      // Send the new task data to the parent component
      addNewTask(newTask);

      // Clear the input field after submission
      setTitle("");
    } catch (error) {
      console.error("Error adding new task:", error);
    }
  };

  return (
    <div className={styles.sideNav}>
      <h2 className={styles.heading}>Add new task</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Button text="add task" icon={"todo"} onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default SideNav;
