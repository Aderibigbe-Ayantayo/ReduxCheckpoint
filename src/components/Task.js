import React, { useState } from 'react';

const Task = ({ task, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(newDescription);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </span>
          <button onClick={onToggle}>{task.isDone ? 'Undo' : 'Done'}</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </li>
  );
};

export default Task;
