import { TODOLIST } from "./adatok.js";
import Todo from "./todo.js";

class TodoK{

    constructor(){
        this.adatok = TODOLIST;
        this.szuloELEM = $("#tablazat-container table");
        this.tablazat = null;

        for (let index = 0; index < this.adatok.length; index++) {
            const todo = new Todo(this.adatok[index], this.szuloELEM);
          }
    }

    #kattintas(){
        
    }
    
}

export default TodoK;
