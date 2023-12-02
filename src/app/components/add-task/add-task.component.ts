import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoServiceService } from '../../services/todo-service.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  newTaskTitle: string = '';

  constructor(private todoService: TodoServiceService) {}

  addTask(): void {
    if (this.newTaskTitle.trim()) {
      this.todoService.addTask(this.newTaskTitle);
      this.newTaskTitle = '';
    }
  }
}
