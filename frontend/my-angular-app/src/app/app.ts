import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicTacToe } from "./tic-tac-toe/tic-tac-toe";
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TicTacToe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');

   message: string = '';

  constructor(private api: ApiService) {}

  callBackend() {
  this.api.getMessage().subscribe(
    (res: any) => {
      this.message = res.message;
    },
    (err: any) => {
      this.message = 'Error connecting to backend';
      console.error(err);
    }
  );
}
}
