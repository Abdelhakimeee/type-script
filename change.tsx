// in terminal:  npm install typescript @types/react @types/react-dom
import React from 'react';

// Step 1: Define an interface for the props
interface GreetingProps {
  name: string; // The 'name' prop is expected to be a string
}

// Step 2: Annotate the props in the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
//_______________________________________________2
import React, { Component } from 'react'; 
class Counter extends Component { 
  state = {
    count: 0
  }; 
  
  increment = () => {
    this.setState({ count: this.state.count + 1 }); 
  }; 
  
  render() { 
    return ( 
      <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div> 
    );
  }
} 
export default Counter;