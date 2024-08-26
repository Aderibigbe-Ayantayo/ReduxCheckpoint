// Action Types
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const FILTER_TASKS = 'FILTER_TASKS';

// Action Creators
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,
  payload: taskId,
});

export const editTask = (taskId, updatedTask) => ({
  type: EDIT_TASK,
  payload: { taskId, updatedTask },
});

export const filterTasks = (filter) => ({
  type: FILTER_TASKS,
  payload: filter,
});
