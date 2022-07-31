import axios from 'axios';
import { useState } from 'react';
import Student from './Student';

const Weather = () => {

    const [city, setCity] = useState("");
    const [records, setRecords] = useState([]);

    const handleChange = (evt) => {
        setCity(evt.target.value);

    }
    const handleClick = () => {

        axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=4219dcb4183c1856ffbc7447652134ac&units=metric').
            then((resp) => {

                const rcds = [...records];
                rcds.push({ cn: city, temp: resp.data.main.temp, icon: "http://openweathermap.org/img/wn/" + resp.data.weather[0].icon + "@2x.png" });
                setRecords(rcds);

            }).
            catch((error) => {
                console.log(error);
            });
    }

    const handleDel = (n) => {
        const rcds = [...records];
        rcds.splice(n, 1);
        setRecords(rcds);
    }

    return (
        <>

            <h1>Weather Information</h1>

            Enter City : <input type="text" value={city} onChange={handleChange} /><hr />
            <input type="button" value="Add" onClick={handleClick} /><hr />


            {
                records.map((row, i) => {
                    return (
                        <div key={i} className="stu">
                            <img src={row.icon} alt="" />
                            <h2>{row.cn}</h2>
                            <p>{row.temp}&#x00B0;C</p>
                            <Student del={() => handleDel(i)} />
                        </div>
                    )
                })
            }

        </>
    )

}

export default Weather;