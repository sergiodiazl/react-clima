import React,{Component} from 'react';
import './WeatherForm.css';

class WeatherForm extends Component {
    constructor(props){
        super(props);
        this.state={language:this.props.language};
        this.handleSubmit = this.handleSubmit.bind(this);   
    }
    componentWillReceiveProps({language,weatherData}) {
        this.setState({...this.state,language,weatherData})
      }
    handleSubmit(event) {
        event.preventDefault();
        this.props.searchWeather(this.cityInput.value);
        
        
      }
    render() {
      const{formLegend,cityPlaceholder,buttonText,otherLanguage}=this.state.language;  
      return (
            <form className="weather-form" onSubmit={this.handleSubmit}>
                <fieldset>
                     <legend>{formLegend}</legend>
                    
                        <input type="text"name="city" ref={(input)=>this.cityInput=input}
                        placeholder={cityPlaceholder}
                         required></input>      
                     
                        <button className='submit-bottom'type="submit">
                        {buttonText}
                        </button>   
                </fieldset>
               
                <button className='language-button'onClick={this.props.changeLanguage}>{otherLanguage}</button>
            </form> 
      );
    }
  }
  
  export default WeatherForm;
  