import React, { Component } from 'react';
import {SPANISH,ENGLISH} from'../Texts.js';
import WeatherForm from'../WeatherForm/WeatherForm';
import WeatherInfo from'../WeatherInfo/WeatherInfo';
import './WeatherContainer.css';
import {APIURL}from '../../ApiUrl.js';
class WeatherContainer extends Component {
    constructor(){
        super();
        this.state={
            language:SPANISH,
            weatherData:{},
        };
        this.changeLanguage=this.changeLanguage.bind(this);    
        this.searchWeather=this.searchWeather.bind(this);
    }
    searchWeather(city){
        fetch(APIURL+city)
        .then(response=>response.json())
        .then(data=> this.setState({weatherData:data}))
        .then(data=>console.log(data))
        .catch((error)=>console.log(error));
      
    }
    
    changeLanguage(){
        if(this.state.language===SPANISH){
            this.setState({language:ENGLISH})
        }else{
            this.setState({language:SPANISH})
        }
    }
    render() {
        const {title,author,github}=this.state.language;  
      return (
        <div className="weather-container">
            <div className="weather-box">
                <h1>{title}</h1>
                <WeatherInfo class="weather-info" weatherData={this.state.weatherData} language={this.state.language}/>
                <WeatherForm searchWeather={this.searchWeather}  changeLanguage={this.changeLanguage}language={this.state.language}/>
               
            </div>
           
           
            <footer  >
                <a href="https://github.com/sergiodiazl/react-clima" target="_blank"rel="noopener noreferrer">
                <p> {author}</p>
                <div className ="github-logo"><img src={'assets/img/github.png'}alt="github logo"/></div>
                <p>{github}</p>
                
                </a>
            </footer>
           
        </div>
      );
    }
  }
  
  export default WeatherContainer;
  