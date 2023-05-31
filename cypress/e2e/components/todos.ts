import { HtmlElement, TextInput } from "@axa-fr/cypress-component";

export const Todos = {
  newTodos: TextInput(".new-todo"),
  todoList: HtmlElement(".todo-list li"),
};
