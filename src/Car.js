import React from "react";

class Car extends React.Component{
    constructor(props){
        super(props)
    }
    sayHello = () => {
        alert("Bonjour.")
    };

    render(){
        return(
            <div>
                <h2>Je suis une voiture de type {this.props.brand}.</h2>
                <button onClick={this.sayHello}>Dis bonjour.</button>
            </div>
        )     
    }
}

export default Car;