import { B } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-tic-tac-toe',
  imports: [
    MatButtonModule,
    MatGridListModule,
    CommonModule,
],
  templateUrl: './tic-tac-toe.html',
  styleUrl: './tic-tac-toe.css'
})
export class TicTacToe {
  buttons = [
    {label: "", color: "", id: 0, clicked: false},
    {label: "", color: "", id: 1, clicked: false},
    {label: "", color: "", id: 2, clicked: false},
    {label: "", color: "", id: 3, clicked: false},
    {label: "", color: "", id: 4, clicked: false},
    {label: "", color: "", id: 5, clicked: false},
    {label: "", color: "", id: 6, clicked: false},
    {label: "", color: "", id: 7, clicked: false},
    {label: "", color: "", id: 8, clicked: false}
  ];

  matrix: number[][] = [];

ngOnInit() {

  for (let i = 0; i < 3; i++) {
    const row: number[] = [];
    for (let j = 0; j < 3; j++) {
      row.push(0);
    }
    this.matrix.push(row);
  }

}
  isXTurn = true;

  put(index: number){
    if(this.buttons[index].clicked == true) return;
    this.buttons[index].clicked = true;
    if(this.isXTurn) {
      this.buttons[index].label = "X";
      this.buttons[index].color = "warn";
      this.isXTurn = false;
      this.matrix[Math.floor(index/3)][index%3] = 1;
      this.check();
    }else{
      this.buttons[index].label = "O";
      this.buttons[index].color = "primary";
      this.isXTurn = true;
      this.matrix[Math.floor(index/3)][index%3] = -1;
      this.check();
    }
    
    return;
  }


  lock(){
    for (let i = 0; i < 9; i++) {
      this.buttons[i].clicked = true; 
      
    }
  }

  reset(){
    for (let i = 0; i < 3; i++) {
    const row: number[] = [];
      for (let j = 0; j < 3; j++) {
        this.matrix[i][j] = 0;
      }
    }
    for (let id = 0; id < 9; id++) {
      this.buttons[id] = {label: "", color: "", id: id, clicked: false} ;
      
    }
  }

  check(){
    for (let i = 0; i < 3; i++) {
      if(this.matrix[i][0] + this.matrix[i][1] + this.matrix[i][2] == 3){
        //x nyert
        alert("x nyert");
        this.lock();
      }else if(this.matrix[i][0] + this.matrix[i][1] + this.matrix[i][2] == -3){
        // o nyert
        alert("o nyert");
        this.lock();
      }
      if(this.matrix[0][i] + this.matrix[1][i] + this.matrix[2][i] == 3){
        //x nyert
        alert("x nyert");
        this.lock();
      }else if(this.matrix[0][i] + this.matrix[1][i] + this.matrix[2][i] == -3){
        // o nyert
        alert("o nyert");
        this.lock();
      }   
    }
    if(this.matrix[0][0] + this.matrix[1][1] + this.matrix[2][2] == 3){
        //x nyert
        alert("x nyert");
        this.lock();
      }else if(this.matrix[0][0] + this.matrix[1][1] + this.matrix[2][2] == -3){
        // o nyert
        alert("o nyert");
        this.lock();
      }

     if(this.matrix[2][0] + this.matrix[1][1] + this.matrix[0][2] == 3){
        //x nyert
        alert("x nyert");
        this.lock();
      }else if(this.matrix[2][0] + this.matrix[1][1] + this.matrix[0][2] == -3){
        // o nyert
        alert("o nyert");
        this.lock();
      }
  }
}
