import React, { Component } from 'react';
import Hotels from './Hotels';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="nav-wrapper indigo lighten-4">
              <h1>Hotels Booking System</h1>
        </div>
        <div className="row">
          <div className="col s8">
            <Login/>
            <Hotels/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Hotel Booking</p>
//       </header>
//       <div>
//         <Hotels />
//       </div>
//     </div>
//   );
// }

// export default App;
