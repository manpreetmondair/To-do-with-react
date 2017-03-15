import React from 'react';

class Todo extends React.Component{
    constructor(props){
        super(props)                    // super is required here
        this.handleClickOnCheckbox=this.handleClickOnCheckbox.bind(this)
        this.toggleTodoComplete=this.toggleTodoComplete.bind(this)// this.addTodo=this.addTodo.bind                                                                   (this)
        this.state = {                                    // state of the page
         todos: []                                       // start with empty state
            }
        }

    handleClickOnCheckbox(e) {
    // Only do something if a user clicks on a checkbox input tag
    if (e.target.type === 'checkbox') {
        // I tried this toggle function but I am getting errors with it so I comment it out
        //   toggleTodoComplete(e.target.getAttribute('todoId'), e.target.checked)
        }
    }
        toggleTodoComplete(todoId, isComplete) {
        if (isComplete) {
            fetch(`/api/v1/todos/:todoId/complete `)
        }
        else {
            fetch('/api/v1/todos/:todoId/incomplete ')
        }
    }

    render(){
                    return <li className="list-group-item">
                    <div className ="row">
                    <div className ="col-xs-6">
                      <div className="checkbox">
                      <label> <input type="checkbox" />
                        {this.props.description}
                        </label>
                        </div>
                       </div>
                       <div className="col-xs-6">
                    <div className="checkbox text-right">
                        <div className="label label-default">
                        {this.props.category}
                        </div>
                    </div>
                </div>
             </div>
             </li>
             }
        }
export default Todo;
