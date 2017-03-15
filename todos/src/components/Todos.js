import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router' 


    class Todos extends React.Component {
        constructor(props){
            super(props)                            // super is required here
            this.getTodos=this.getTodos.bind(this)   // this.AddTodo = this.AddTodo.bind(this)
            this.addTodo=this.addTodo.bind(this)
            this.toggleComplete= this.toggleComplete.bind(this)
            // this.state = {                        // state of the page                     
            // todos: []                              //start with empty state  
            // }
            }                                            

        //LifeCycles Methods                                             
        componentWillMount(){ 
        this.getTodos()                                    // put the data into it and change the state
    }
    
        //API Methods
        getTodos(){
            fetch('/api/v1/todos')
                .then (response => response.json())
                .then(todos => this.props.dispatch({type: 'TODOS_UPDATE', body: todos}))

                // .then(todos => this.setState({todos:todos}))
            }
        addTodo(description, category)
          {
        if (description !== '' && category !== '') {
            fetch('/api/v1/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    todo: description,
                    category: category,
                    completed: false
                })
            })
            .then(this.getTodos)
        }
    }

    toggleComplete(todoId, isComplete) {
        fetch('/api/v1/todos/' + todoId + '/' + (isComplete ? 'complete' : 'incomplete'))
        .then(this.getTodos)
    }

    render(){
        let todos = this.props.sharedTodos.map((todo, key) => <Todo key={key} {...todo} toggleComplete={this.toggleComplete} />)

        if (todos.length === 0) {
            todos = <div className="alert alert-success text-center">Please start by adding a todo above.</div>
        }
        return (
           <div className="container">
            <div className="well well-sm">
                <button className="btn btn-primary btn-outline-danger" type="button" onClick={() => browserHistory.push('/completed')}>View Completed Todos</button>
            </div>
            <AddTodo addTodo={this.addTodo} />
            <ul className="list-group">
                {todos}
            </ul>
            </div>
       )
    }
        }
 // Map shared Redux state to props
const mapStateToProps = (redux) => {
    return {
        sharedTodos: redux.state.todos
    }
}

// Export the component, connected to Redux, for other components to import
export default connect(mapStateToProps)(Todos)




// export default Todos;

 //  <Todo description="cut the vegetables"/>
                //  <Todo description= "add some oil" />
                //  <Todo description= "boil the water" />
                //  <Todo description= "add some pasta"/>
                //  <Todo description= "mix vegetables and pasta"/>