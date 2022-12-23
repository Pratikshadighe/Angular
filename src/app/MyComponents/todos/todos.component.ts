import { Component } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
todo:Todo[] ;
localItem:string;
constructor(){
this.localItem===localStorage.getItem("todo");
if(this.localItem===null){
  this.todo=[]
}else{
  console.log(this.localItem)
  
  this.todo =this.localItem ? JSON.parse(this.localItem) :null
}
}
deleteTodo(todo:Todo){
  
  const index=this.todo.indexOf(todo);
  this.todo.splice(index,1)
  localStorage.setItem("todo",JSON.stringify(this.todo))
 

}
addTodo(todo:Todo){
 
  this.todo = this.todo|| [];
  this.todo.push(todo)
  localStorage.setItem("todo",JSON.stringify(this.todo));
  }
  toggleTodo(todo:Todo){
 
    const index=this.todo.indexOf(todo);
    this.todo[index].active=!this.todo[index].active;
    localStorage.setItem("todo",JSON.stringify(this.todo));
    
    
  
  
  }
}
