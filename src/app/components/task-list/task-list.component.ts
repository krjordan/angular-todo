import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TodoServiceService } from '../../services/todo-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private todoService: TodoServiceService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.todoService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  toggleCompletion(id: number): void {
    this.todoService.toggleTaskCompletion(id);
    this.getTasks();
  }

  deleteTask(id: number): void {
    this.todoService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    });
  }
}
