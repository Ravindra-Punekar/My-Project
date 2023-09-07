import React, { useState } from "react";
import styles from "./Card.module.css";
import Button from "../Button/Button";
import useFetch from "../../../useFetch";

const Card = ({ todos }) => {
  const [isDoneStates, setIsDoneStates] = useState(todos.map(() => false));

  const toggleIsDone = (id) => {
    const newStates = [...isDoneStates];
    newStates[id] = !newStates[id]; //create a new array with the same values as isDoneStates, but with the value at index id flipped
    setIsDoneStates(newStates); //set isDoneStates to the new array
  };

  return todos.map((todo, id) => (
    <div className={styles.card} key={todo.id}>
      <Button
        onClick={() => {
          todo.completed = !todo.completed;
          toggleIsDone(id);
        }}
        text={todo.completed ? "Done" : "Not Done"}
      />
      {todo.completed ? (
        <div className={styles.done}>
          <h2>{todo.title}</h2>
        </div>
      ) : (
        <div className={styles.notDone}>
          <h2>{todo.title}</h2>
        </div>
      )}
    </div>
  ));
};

export default Card;
