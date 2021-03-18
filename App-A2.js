import React, {Component} from 'react' ;
export default class Use_Effect1 extends React.Component{
   constructor(props){
       super(props);
       this.state = {
          count : 0,
          salary : 1000
        }
       }

       incHandler = () => {
          console.log("incHandler Called")
          this.setState({count : this.state.count + 1})
       }

       decHandler = () => {
           console.log("decHandler Called");
           
          this.setState(({salary : this.state.salary - 50}))
    }

    componentDidMount() {
        console.log("mounted")
	}

    componentUpadateMount() {
        console.log("mountedss")
    }

    componentWillUnmount() {
        console.log("unmounted")
	}

       render(){
          return (
          <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.incHandler}>Count</button>

            <h1>{this.state.salary}</h1>
            <button onClick={this.decHandler}>Salary</button>
        </div>
          )
       }
       
   
}