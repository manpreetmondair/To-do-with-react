import React from 'react';
import Todo from './Todo';

class Todos extends React.Component{

    render(){
       return (
             <ul className="list-group">
                 <Todo description="cut the vegetables"/>
                 <Todo description= "add some oil" />
                 <Todo description= "boil the water" />
                 <Todo description= "add some pasta"/>
                 <Todo description= "mix vegetables and pasta"/>
            </ul>
           
       )
    }
        }
export default Todos;