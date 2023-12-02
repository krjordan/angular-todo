import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  tasks: any;

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(taskTitle: string): Observable<Task> {
    const task = {
      title: taskTitle,
      completed: false,
      id: Math.floor(Math.random() * 1000000),
    };
    return this.http.post<Task>(this.apiUrl, task);
  }

  deleteTask(taskId: number): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/${taskId}`);
  }

  toggleTaskCompletion(taskId: number): void {
    const task = this.tasks.find((task: any) => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }
}
