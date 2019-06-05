
import React from 'react';
import 'papercss/dist/paper.css';


import './App.css';
/* import { nullLiteral } from '@babel/types';
import { isNullOrUndefined } from 'util'; */


function App() {
    return (
        <Todolist ></Todolist>
    )
}


class Todolist extends React.Component {
    newItem = "";
    constructor(props) {
        super(props);
        this.state = { list: [], newItem: '', status: false ,counter: 0, date: new Date()}
        // this.state.list=this.props.list;
       
    }

    callme(){
        setInterval(() => {
            this.setState({ date: new Date() });

        },1000)
    }


    changestatus(item) {
        let i = this.state.list.indexOf(item); //item value
        let l = this.state.list;  //complete list
        l[i].status = ! l[i].status;
        var counter = 0;
        for (i=0;i<this.state.list.length;i++){

// task completion logic ---------------------------------------------

        if(l[i].status !== false){
            counter ++;
            console.log({counter});
        }

        else{
            console.log({counter});
        }
    }
        //  l.splice(i,1);
        this.setState(
            { list: l , counter: counter}
        )
        console.log(this.state.list);

    }

   

    deletevalue(item) {
        let i = this.state.list.indexOf(item);
        let l = this.state.list;
        // l[i].status=!l[i].status;
        l.splice(i, 1);
        this.setState(
            { list: l }
        )
        console.log(this.state.list)
    }

    moveup(item) {
        let i = this.state.list.indexOf(item);
        if (i !== 0) {
            let l = this.state.list;
            let a = l[i];
            l[i] = l[i - 1];
            l[i - 1] = a;
            this.setState({
                list: l
            }
            )
            console.log(l);
        }
    }


    movedown(item) {
        let i = this.state.list.indexOf(item);

        if (i !== this.state.list.length - 1) {
            let l = this.state.list;
            let a = l[i + 1];
            l[i + 1] = l[i];
            l[i] = a;
            this.setState({
                list: l
            }
            )
            console.log(l);
        }
    }

    getlist() {
        let list = [];
        for (let item of this.state.list) {
            list.push(
                <div className="rotate-in-center ">
<div className="date">{this.state.date.toLocaleDateString()}</div>

                    <li onClick={(e) => { this.changestatus(item) }} className={item.status ? "paper-btn btn-block list btn-primary" : "paper-btn btn-block list "} >{item.name}</li>
                   
                   <button className="btn-small btn-danger" onClick={(e) => { this.deletevalue(item) }}>Delete</button>
                    <button className="btn-small btn-warning" onClick={(e) => { this.moveup(item) }}>moveup</button>
                    <button className="btn-small btn-success" onClick={(e) => { this.movedown(item) }}>movedown</button>
                   
                    

                    
                </div>


            )
      
        }
        return list;
    }

    getvalue(e) {
        //  this.newItem=e.target.value;
        e.preventDefault()
        this.setState({ newItem: e.target.value })

        //  console.log(this.newItem);


    }

    setvalue(e) {
        console.log("click");
        e.preventDefault()
        let lis = this.state.list;
        //  obj={name:this.state.newItem,status:false}
        lis.push({ name: this.state.newItem, status: false });
        this.setState(

            { list: lis, newItem: '' }

        )

    }


    render() {
        return (
            <div className="first">

                <h3>TODO LIST</h3>
                <p>Task Completed : {this.state.counter}  / {this.state.list.length} </p>
                <div>

                    <input className="box" type="text" placeholder="Enter Task here" onChange={(e) => { this.getvalue(e) }} value={this.state.newItem}  ></input>

                </div>

                <div className="butt">
                    <button className="btn-secondary" onClick={(e) => { this.setvalue(e) }}>Add</button>
                </div>

                {/* <h3>Task Completed :    / {this.state.list.length} </h3> */}
                <div>
               
                    <ul className="lis">
                   
                        {this.getlist()} 
                     
                        {this.callme()}
                    </ul>
                   
                </div>


            </div>

        )
    }

}




export default App;