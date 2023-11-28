import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

task = signal([
'Primero',
'Segundo']
  )
changeHandler(event: Event){
  const input = event.target as HTMLInputElement;
  const newTask = input.value;
  this.task.update((task)=>[...task,newTask]);
}

deleteTask(index: number){

this.task.update((task)=> task.filter((task, posistion) => posistion !== index));
}
}
