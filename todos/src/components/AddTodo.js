import React from 'react';

class AddTodo extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            description: '',
            category: ''
            
        }
    }
   onClick(addTodo){                    
        //Post to /api/v1/todos // Call parent addTodo method
        addTodo(this.state.description, this.state.category)

        // Sets state of fields, and triggers render() again
        this.setState({
            description: '',
            category: ''
        })
    
   }

    render(){
             return (
            <div className="container addingtodo">
                
                    <div className="col-sm-6">
                        <div className="form-group">
                            <select className="form-control" value={this.state.category} onChange={(e) => this.setState({category: e.target.value})}>
                                <option value="">Select category...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Task..." value ={this.state.description} onChange={(e) => this.setState({description: e.target.value})}/>
                            <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={() => this.onClick(this.props.addTodo)}>Add Todo</button>
                            </span>
                        </div>
                    </div>
                </div>
           
        )
    } 
 }
                
export default AddTodo;
