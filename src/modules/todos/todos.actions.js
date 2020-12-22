import * as types from "./todos.types";

let nextTodoId = 0;

const todosActions = {
  addTodo: (content) => ({
    type: types.ADD_TODO,
    payload: {
      id: ++nextTodoId,
      content,
    },
  }),
  toggleTodo: (id) => ({
    type: types.TOGGLE_TODO,
    payload: { id },
  }),
};

export default todosActions;
