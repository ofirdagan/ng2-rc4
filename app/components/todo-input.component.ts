import { Component } from '@angular/core';
@Component({
  selector: 'todo-input',
  template:
    `<label for="todo-input">Todo: </label><input id="todo-input" type='text' #todoInput [value]="defaultValue"/>
    <button type="button" (click)="onAdd(todoInput.value)">Add</button>
    `
})
export class TodoInputComponent {
  defaultValue = 'please provide a value';

  onAdd(value) {
    console.log('default is:\n\'', this.defaultValue, '\'\nnew is:\n\'', value, '\'');
  }
}