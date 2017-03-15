import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo'

    class Todos extends React.Component{
        constructor(props){
            super(props)                           // super is required here
            this.getTodos=this.getTodos.bind(this)   // this.AddTodo = this.AddTodo.bind(this)
            this.addTodo=this.addTodo.bind(this)
            this.state = {                        // state of the page                     
            todos: []                              //start with empty state  
            }
            }                                            
                                                         
        componentWillMount(){ 
        this.getTodos()                               //LifeCycles Methods
        this.addTodo()                               // put the data into it and change the state
        }
        getTodos(){
            fetch('/api/v1/todos')
                .then (response => response.json())
                .then(todos => this.setState({todos:todos}))
            }
            addTodo(todo){
                this.getTodos()
            }

    render(){
        let todos = this.state.todos.map((todo, key) => <Todo todoID={todo.id} completed={todo.completed === 'yes' ? 'checked' : ''}
        description={todo.todo} category={todo.category}  key={key}/>)
       return (
           <div>
             <AddTodo getTodos={this.getTodos}/>
             <ul className="list-group">
                {todos}
            </ul>
            </div>
       )
    }
        }
export default Todos;

 //  <Todo description="cut the vegetables"/>
                //  <Todo description= "add some oil" />
                //  <Todo description= "boil the water" />
                //  <Todo description= "add some pasta"/>
                //  <Todo description= "mix vegetables and pasta"/>