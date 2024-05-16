import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import React from 'react';
import logo from './images/FA.png';
import { TextBox } from 'devextreme-react/text-box';
import Select from 'react-select'
import Button from 'react-bootstrap/Button';
import * as searchParamCuisines from "./data/searchParamCuisines";
import * as searchParamIngredients from './data/searchParamIngredients';
import * as searchParamAlergens from './data/searchParamAlergens';

import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Recipe name
        <TextBox style={{alignSelf: "stretch"}}/> 
        Cuisine
        <Select isMulti name="colors" options={searchParamCuisines.cuisines} className="basic-multi-select" classNamePrefix="select"/>
        Ingredient
        <Select isMulti name="colors" options={searchParamIngredients.ingredients} className="basic-multi-select" classNamePrefix="select"/>
        Alergens
        <Select isMulti name="colors" options={searchParamAlergens.alergens} className="basic-multi-select" classNamePrefix="select"/>
        </p>
        <Button onClick={() => navigate("/Search")} variant="outline-primary">Seach</Button>{' '}
    </div>
    
  );
}

export default Home;
