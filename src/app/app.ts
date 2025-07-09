import { Component } from '@angular/core';
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
}
