import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increment()">Increment</button>
    <p>Counter: {{ counter() }}</p>
  `
})
export class CounterComponent {
  counter = signal(0);

  increment() {
    this.counter.update(value => value + 1);
  }
}
