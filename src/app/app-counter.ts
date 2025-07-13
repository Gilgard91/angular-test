import {Component, output, signal} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increment()">Increment</button>
    <p>Counter: {{ counter() }}</p>`,
})
export class CounterComponent {
  counter = signal(0);
  onClick = output<number>();

  increment() {
    this.counter.update(value => value + 1);
    this.onClick.emit(this.counter());
  }
}
