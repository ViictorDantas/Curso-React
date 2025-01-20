import logo from './logo.svg';
import './App.css';
import { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, World!"
    };
  }

  handlePClick() {
    const { message } = this.state;
    console.log(`Clicou no P ${ message }`);
  }

  render() {
    // modo de usar com destructuring
    const { message } = this.state;

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My first React App</h1>
        <p onClick={this.handlePClick}> { message }</p>
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
