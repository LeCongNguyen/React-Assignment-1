import React, {Component} from 'react';
<<<<<<< HEAD
import Main from "./components/MainComponent";
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    )
  }
}
=======
import StaffList from './Components/StaffListComponent';
import logo from './logo.svg';
import './App.css';
import NameOfApp from './Components/NameOfApp';

function App() {
  return (
    <div>
      <NameOfApp />
      <StaffList />
    </div>
  );
}

>>>>>>> 03383309d8bd81aa5a0d8126d0acca66ea8c08f0
export default App;
