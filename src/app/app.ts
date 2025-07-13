import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CounterComponent} from './app-counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-test';
  lastValue = signal(0);
  clickCount = signal(0);

  // Metodo chiamato quando il componente figlio emette l'evento
  handleCounterClick(value: number) {
    console.log('Ricevuto valore dal counter:', value);

    this.lastValue.set(value);
    this.clickCount.update(count => count + 1);

    if (value === 5) {
      alert('Hai raggiunto il valore 5!');
    }
  }
}
