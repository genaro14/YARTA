import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./tasksList.module.css";
import Task from "../task/task";
import { formatTime } from "../../utils/dateHelpers";

const TasksList = () => {
  const [cards, setCards] = useState([
    { id: 1, title: "Meeting", subtitle: "Lorem ipsum et sibus amet", date: "2023-11-23" },
    { id: 2, title: "Groceries", subtitle: "Flour, Oil, Beer, Meat", date: "2023-11-24T8:30:00" },
    // Add more cards as needed
  ]);
  const handleDelete = (id) => {
    // Filter out the card with the specified id
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };
  
  return (
    <>
      <div className={styles.container}>
        <div>
        <div className={styles.heading}>
          <h4>To DO List</h4>
        </div>
          <div className={styles.linkWrapper}>
            <a>Today</a>
            <a>Tomorrow</a>
            <a>Done</a>
            <a>Blocked</a>
          </div>
        </div>
        {cards.map((card) => (
          <Task
            key={card.id}
            title={card.title}
            subtitle={card.subtitle}
            date={formatTime(card.date)}
            onDelete={() => handleDelete(card.id)}
          />
        ))}
      </div>
    </>
  );
};

TasksList.propTypes = {};

TasksList.defaultProps = {};

export default TasksList;
