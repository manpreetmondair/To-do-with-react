import React from 'react';

class Todo extends React.Component{
   
    
    render(){
                    return <li className="list-group-item">
                    <div className="row">

                <div className="col-xs-6">
                    <div className="checkbox">
                        <label className={this.props.completed === 'yes' ? 'done' : ''}>
                            <input type="checkbox" checked={this.props.completed === 'yes' ? true : false} onChange={(e) => this.props.toggleComplete(this.props.id, e.target.checked)} />
                            {this.props.todo}
                        </label>
                    </div>
                </div>

                <div className="col-xs-6">
                    <div className="checkbox text-right">
                        <div className="label label-default">{this.props.category}</div>
                    </div>
                </div>

            </div>
        </li>
    }
        }
export default Todo;


//  <div className ="row">
//                     <div className ="col-xs-6">
//                       <div className="checkbox">
//                       <label> <input type="checkbox" />
//                         {this.props.description}
//                         </label>
//                         </div>
//                        </div>
//                        <div className="col-xs-6">
//                     <div className="checkbox text-right">
//                         <div className="label label-default">
//                         {this.props.category}
//                         </div>
//                     </div>
//                 </div>
//              </div>
//              </li>
//              }