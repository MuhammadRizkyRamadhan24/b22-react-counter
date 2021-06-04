import React, { Component } from 'react';

class App extends Component{
    constructor(props) {
        super(props)
        this.state ={
            number: 0,
            status: '',
        }
    }

    plusValue = () =>{
      if(this.state.number === 10 ){
        this.setState({
          status: 'Value Dont > 10'
        })
      } else {
        this.setState({
          number: this.state.number + 1
        })
        this.setState({
          status: ''
        })
      }
    }

    minusValue = () =>{
      if(this.state.number === 0 ){
        this.setState({
          status: 'Value Dont < 0'
        })
      } else {
        this.setState({
          number: this.state.number - 1
        })
        this.setState({
          status: ''
        })
      }
    }


    render () {
        return (
          <div style={{ display: 'flex', width: '100vw', height: '48vw', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ display: 'flex',flexDirection: 'column', width: '50rem', height: '25rem', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f4f6', borderRadius: '20px'}}>
                <h1>COUNT</h1>
                <p style={{fontSize: '2vh',fontWeight: '700'}}>{this.state.status}</p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection: 'row'}}>
                  <button
                  style={{margin: '2rem',backgroundColor: 'black',borderRadius: '9999px', width: '5rem', height: '5rem',color: 'white',fontSize: '8vh'}}
                  onClick={this.minusValue}
                  >
                  -
                  </button>
                  <div style={{fontSize: '8vh'}}>
                    {this.state.number}
                  </div>
                  <button
                  style={{margin: '2rem',backgroundColor: 'black',borderRadius: '9999px', width: '5rem', height: '5rem',color: 'white',fontSize: '8vh'}}
                  onClick={this.plusValue}
                  >
                  +
                  </button>
                </div>
            </div>
            
          </div> 
        )
    }
}

export default App;


// import logo from './logo.svg';
// import './App.css';

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

// export default App;
