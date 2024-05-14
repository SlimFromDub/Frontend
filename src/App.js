import './App.css';
import React from 'react';
import logo from './images/FA.png';
import { TextBox } from 'devextreme-react/text-box';
import Select from 'react-select'
import Button from 'react-bootstrap/Button';
import Header from './Header';
import Footer from './Footer';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

function App() {
  return (
    <div className="App">
        <Header></Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Název receptu
        <TextBox/> 
        Kuchyně
        <Select isMulti name="colors" options={options} className="basic-multi-select" classNamePrefix="select"/>
        Ingredience
        <Select isMulti name="colors" options={options} className="basic-multi-select" classNamePrefix="select"/>
        Alergeny
        <Select isMulti name="colors" options={options} className="basic-multi-select" classNamePrefix="select"/>
        </p>
        <Button variant="outline-primary">Seach2</Button>{' '}
        <Footer></Footer>
    </div>
    
  );
}

export default App;
