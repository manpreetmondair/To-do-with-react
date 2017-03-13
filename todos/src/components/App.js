import React from 'react';
// import Image from './Image';
import Todos from './Todos';
import AddTodo from './AddTodo'
class App extends React.Component{
    render(){
           return (
            <div>
               <i className="fa fa-list-ol fa-4x icon" aria-hidden="true"><h4>To-Do-List</h4></i>
                <AddTodo></AddTodo>
                <Todos></Todos>
            </div>  
        )
    }
}
export default App;
        // let Images =[]
        //div should be start after return
        // we dont need to be use "" for example dta-id={12}
        // every tag must have a closing tag or self close it's not forgiving
        // for(let i=0; i<50; i++){
        //  Images.push(<Image number={i} />);//pushing Images into Image tag 
        // }
        // return <div className="container"> 
        //       <div className="row">
        //       <div className="col-sm-6 col-offset-3">
            //   {Images}
            //     // <Image number={1} />
            //     // <Image number={2} />
            //     // <Image number={3} />
            //     // <Image number={4} />
            //     // <Image number={5} />
            //     // <Image number={6} />
            //     // <Image />
//               </div>
//            </div>
//         </div>
  
 
