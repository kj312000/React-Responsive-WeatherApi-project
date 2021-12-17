import React,{useState,useEffect} from 'react'
import Main from './Main'
import './Temp.css'


function Temp() {
  const [searchValue, setSearchValue] = useState("pune");
  const [tempInfo, setTempInfo] = useState({});
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=af4dbe1c89701ef694b27d7d0ae00a6b`;
      let res = await fetch(url);
      let data = await res.json();
      
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
 }, []) // eslint-disable-line react-hooks/exhaustive-deps


  
    return (
        <div className="main_container">
            <div className="wrap">
                <div className="search">
                <input
                    type="search"
                    placeholder="search..."
                    autoFocus
                    id="search"
                    className="searchTerm"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />

                <button
                    className="searchButton"
                    type="button"
                    onClick={getWeatherInfo}
                    >
                    Search
                </button>
                </div>
            </div>
            <Main  {...tempInfo}/>
            </div>
    )
}

export default Temp
