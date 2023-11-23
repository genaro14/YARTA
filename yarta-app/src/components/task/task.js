import React from "react";
import styles from "./task.module.css";

const Task = ({ title, subtitle, date, onDelete }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h4>{title}</h4>
          <div className={styles.cardSubContent}>
            <p>{date} </p>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className={styles.cardActions}>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

Task.propTypes = {};

Task.defaultProps = {};

export default Task;
