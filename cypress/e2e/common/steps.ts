import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { Todos } from "../components/todos";

Given("I visit TodoApp", () => {
  cy.visit("http://localhost:8888");
});

When("I add {string} Task", (task: string) => {
  Todos.newTodos.type(task + "{enter}");
});

Then("the task {string} is added in the list", (task: string) => {
  Todos.todoList.should((element) => {
    expect(element).to.contain(task);
  });
});
