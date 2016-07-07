import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'todo-input',
  template:
    `<label for="todo-input">Todo: </label><input id="todo-input" type='text' [(ngModel)]="value"/>
    <button type="button" (click)="onAddClicked()">Add</button>
    <div>{{value}}</div>
    `
})
export class TodoInputComponent {
  @Output() onAdd = new EventEmitter();
  value = 'please provide a value';

  onAddClicked() {
    this.onAdd.emit(this.value);
  }
}
