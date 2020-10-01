export default function manageTodo(state = {
  todos: [],
}, action) {

  console.log("reducer received this action:", action);
  console.log("todos", state);
  switch(action.type){
    case "ADD_TODO":
      return { todos: state.todos.concat(action.payload.todoInput) }
    default:
      return state;
  }
}
