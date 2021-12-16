import React,{useEffect} from 'react'
import './Main.css'
function Main({
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  }) {
        const [weatherState, setWeatheState] = React.useState("");
      
        useEffect(() => {
          if (weathermood) {
            switch (weathermood) {
              case "Clouds":
                setWeatheState("wi-day-cloudy");
                break;
              case "Haze":
                setWeatheState("wi-fog");
                break;
              case "Clear":
                setWeatheState("wi-day-sunny");
                break;
            case "Rain":
                setWeatheState("wi-rain");
                break;
              case "Mist":
                setWeatheState("wi-dust");
                break;
              default:
                setWeatheState("wi-day-sunny");
                break;
            }
          }
        }, [weathermood]);
      

        let sec = sunset;
        let date = new Date(sec * 1000);
        let timeStr = `${date.getHours()}:${date.getMinutes()}`;

    return (
        <div className='secondary_div'>
                <div className='div1'>
                    <span className={weatherState}></span>
                </div>
                <div className='div2'>
                    <div className="temperature">
                     <span>{temp}&deg; Celsius</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                            <div className="place">
                                {name}, {country}
                             </div>
                        </div>
                        <div className="date"> {new Date().toLocaleString()} </div>
                </div>
                
                    <div className='div3'>
                                <div className="two-sided-section">
                            
                                        <i className={"wi wi-sunset"}></i>
                                         <span className='icon'>{timeStr} Pm<br />Sunset</span>
                                </div>
                                <div className="two-sided-section">
                            
                                        <i className={"wi wi-humidity"}></i>
                                         <span className='icon'>{humidity}<br />Humidity</span>
                                </div>
                                <div className="two-sided-section">
                            
                                        <i className={"wi wi-rain"}></i>
                                         <span className='icon'>{pressure} <br />Pressure</span>                                   
                                </div>
                                <div className="two-sided-section">
                            
                                        <i className={"wi wi-strong-wind"}></i>
                                         <span className='icon'>{speed}<br />Speed</span>
                                </div>
                                </div>
            </div>
    )
}

export default Main;