import logo from './logo.svg';
import './App.css';
import React from 'react'
import DropdownApp from "./Dropdownapp"
import { Provider } from "react-redux";
import { store } from './Redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';

// To use redux I have to wrap my aplication inside the provider. 
// Providor holds each detail 
// The providor needs a store which is a redux state 
function App() {


  return (
    <Provider store={store}>
      <DropdownApp />
    </Provider>

  );
}

export default App;
