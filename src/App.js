import logo from './logo.svg';
import './App.css';
import { Component } from 'react';



class App extends Component {
    // Vinculando o método handlePClick ao contexto da classe (Foi substituído por arrow function)
    // this.handlePClick = this.handlePClick.bind(this);
    
    state = {
      message: "Hello, World!",
      counter: 0
    };
  

  handlePClick = () => {
    this.setState({ message: 'olá, mundo!' });
  }

  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    // modo de usar com destructuring
    const { message, counter } = this.state;

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My first React App</h1>
        <p onClick={this.handlePClick}> { message } {counter}</p>
        <a onClick={this.handleAClick} className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
