import React,{Component} from 'react';
import './WeatherInfo.css';
class WeatherInfo extends Component {
    constructor(props){
        super(props);
        this.state={
            language:this.props.language,
            weatherData:this.props.weatherData,
        }
       
    }
    componentWillReceiveProps({language,weatherData}) {
        this.setState({...this.state,language,weatherData})
      }
    render() {
      if(this.state.weatherData.hasOwnProperty('cod')){
        const {cod}=this.state.weatherData;
        if (cod===200){
            const{name,
                main:{humidity,pressure,temp},
                weather:{0:{icon}},
                wind:{deg,speed}}=this.state.weatherData;    
            const{intro,humidityLabel,temperatureLabel,windLabel,pressureLabel,weatherConditions}=this.state.language
            return (
                <div className="weather-info">
                    <h2>{intro}{name}</h2>
                    <section className="weather-summary" >
                        
                       
                        <div className="weather-icon"> <img src={`assets/img/${icon}.png` } alt="weather icon" /></div>    
                        <p>{weatherConditions[icon]}</p>
                        
                    </section>
                    <section className="weather-details">
                        <div className='temperature'>
                        {temperatureLabel}
                        <div className="temperature-value">{temp}°c</div>
                       
                        </div>
                        <div className="humidity">
                        {humidityLabel}
                        <div className="humidity-value">{humidity}%</div>
                        </div>
                        <div className="pressure">
                        {pressureLabel}
                        <div className="pressure-value">{pressure}hPa</div>
                        </div>
                        <div className="wind">
                        {windLabel} 
                        <div className="wind-value">{speed}Km/H {deg}°</div>
                        </div>
                        
                    </section>
                </div>
            );
        }else if(cod==='404'){
            const{cityNotFound}=this.state.language;
            return (
                <div className="weather-info">
                    {cityNotFound}
                </div>
            );
        }else{
            return null
        }
      }  
      else{
        return (
            <div className="weather-info">
                
            </div>
      );
      }  
      
    }
  }
  
  export default WeatherInfo;
  