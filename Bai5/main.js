const listElement = document.querySelector("#todoList");
const todoInputElement = document.querySelector("#todoInput");
const addTodoBtnElement = document.querySelector("#addTodoBtn");
const todoFormElement = document.querySelector("#todoForm");

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
      break;
    case "DELETE_TODO":
      const positionDelete = Number.parseInt(action.payload);
      const newTodos = [];
      state.forEach((todo, index) => {
        if (index != positionDelete) {
          newTodos.push(todo);
        }
      });
      return newTodos;
    case "EDIT_TODO":
      state[action.payload.index] = action.payload.title;
      return state;
    default:
      return state;
      break;
  }
};

const store = Redux.createStore(reducer);

const submitTodo = (e) => {
  e.preventDefault();
  store.dispatch({
    type: "ADD_TODO",
    payload: todoInputElement.value,
  });
  todoFormElement.reset();
};

todoFormElement.addEventListener("submit", submitTodo);

store.subscribe(() => {
  listElement.innerHTML = "";

  const todos = store.getState();
  todos.forEach((todo, index) => {
    const liElement = document.createElement("li");
    liElement.textContent = todo;

    const deleteBtnElement = document.createElement("button");
    deleteBtnElement.textContent = "Delete";
    deleteBtnElement.id = `todo-${index}`;

    const editBtnElement = document.createElement("button");
    editBtnElement.textContent = "Edit";
    editBtnElement.id = `edit-btn-${index}`;

    // const editInputElement = document.createElement("input");
    // editInputElement.id = `edit-input-${index}`;
    // editInputElement.style.display = "none";
    // editInputElement.classList.add("hide");

    // editInputElement.value = todo;
    // editInputElement.style.visibility = "hidden";

    // liElement.appendChild(editInputElement);
    // liElement.appendChild(editBtnElement);
    liElement.appendChild(deleteBtnElement);

    listElement.appendChild(liElement);
    deleteBtnElement.addEventListener("click", (e) => {
      const index = e.target.id.split("-")[1];
      store.dispatch({ type: "DELETE_TODO", payload: index });
    });

    // editBtnElement.addEventListener("click", (e) => {
    //   const index = e.target.id.split("-")[1];
    //   store.dispatch({
    //     type: "EDIT_TODO",
    //     payload: { index, title },
    //   });
    //   console.log(document.querySelector(`#edit-input-${index}`).value);
    // });
  });
});
