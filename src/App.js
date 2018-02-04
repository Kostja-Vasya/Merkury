import React, { Component} from 'react';
import Header from './Components/Header';
import Routes from "./Routes";
import Sidebar from './Components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
    return (
      <div className="App d-flex">
          <Sidebar/>
          <div className="content">
              <Header/>
              <Routes/>
          </div>
      </div>
    );
  }
}

export default App;
