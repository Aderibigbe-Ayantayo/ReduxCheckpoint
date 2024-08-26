import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, editTask, filterTasks } from '../redux/actions';
import Task from './Task';

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  const handleFilterChange = (e) => {
    dispatch(filterTasks(e.target.value));
  };

  return (
    <div>
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="notDone">Not Done</option>
      </select>
      <ul>
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggle={() => dispatch(toggleTask(task.id))}
            onEdit={(updatedTask) => dispatch(editTask(task.id, updatedTask))}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
