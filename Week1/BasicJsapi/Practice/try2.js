//to do list 
class Todo {
    constructor(){
      this.todos = [];
    }
    add(todo){
      this.todos.push(todo);
    }
    remove(indexOfTodo) {
      this.todos.splice(indexOfTodo,1);
    }
    update(index, updatedTodo){
      this.todos[index] = updatedTodo;
    }
    getAll(){
      console.log(this.todos);
    }
    get(indexOfTodo){
      return indexOfTodo<0||indexOfTodo>this.todos.length ? null : this.todos[indexOfTodo];
    }
    clear(){
      this.todos = [];
    }
  };
  let list = new Todo();
  list.add('Task 1');
  list.add('Task 2');
  list.add('Task 3');
  list.getAll();