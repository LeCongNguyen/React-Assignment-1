import React, {Component} from 'react';
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

export default App;
