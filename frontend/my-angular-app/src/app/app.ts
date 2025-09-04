import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicTacToe } from "./tic-tac-toe/tic-tac-toe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TicTacToe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
