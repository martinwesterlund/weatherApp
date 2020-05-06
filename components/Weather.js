import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import { observer } from 'mobx-react'
import styled from 'styled-components'

const Input = styled.input`
    font-family: Calibri;
    font-size: 25px;
    width: 80%;
    text-align: center;
    padding: 10px;
    margin:5px 0px;
    color: darkblue;
    border: 1px solid darkblue;
    position: absolute;
    bottom: 100px;
    `
const H1 = styled.h1`
    font-size: 100px;
    font-weight: bold;
    `
const H2 = styled.h2`
    font-size: 30px;
    font-weight: bold;
    `
const H3 = styled.h3`
    font-size: 24px;
    `
function Weather(props) {
    const api = {
        key: '7bfc5ec06cd24786d7b1a3073cb0b0ab',
        url: 'https://api.openweathermap.org/data/2.5/'
    }

    const [location, setLocation] = useState(props.location)
    const [weatherData, setWeatherData] = useState('')

    useEffect(() => {
        getWeather(props.location)

    }, [])

    function getWeather(location) {
        fetch(`${api.url}weather?q=${location}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeatherData(result)
                setLocation('')
                console.log(result)
            })
    }

    return (
        <div>
            <div className='weather-wrapper'>
                {(typeof weatherData.main != 'undefined') ? (
                    <div>
                        {weatherData.weather[0].main == 'Clouds' && <H1><i className="fa fa-cloud"></i></H1>}
                        {weatherData.weather[0].main == 'Clear' && <H1><i className="fa fa-sun-o"></i></H1>}
                        {weatherData.weather[0].main == 'Rain' && <H1><i className="fa fa-umbrella"></i></H1>}
                        {weatherData.weather[0].main == 'Snow' && <H1><i className="fa fa-snowflake-o"></i></H1>}
                        <H2>{weatherData.weather[0].main}</H2>
                        <H2>{weatherData.name}, {weatherData.sys.country}</H2>
                        <H3>{Math.round(weatherData.main.temp)}°C</H3>
                        <H3>Feels like {Math.round(weatherData.main.feels_like)}°C</H3>
                    </div>
                ) : (<H2>No location found</H2>)}

            </div>
            <Formik
                initialValues={{ location: '' }}

                onSubmit={(values, { resetForm }) => {
                    getWeather(values.location)
                    props.addSearch(values.location)
                    resetForm()
                }}>
                {({ values, handleChange, handleBlur, handleSubmit }) => (

                    <form onSubmit={handleSubmit}>
                        <div className="input-row">
                            <Input
                                type="text"
                                name="location"
                                id="location"
                                placeholder="Enter location"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.location}
                            />
                        </div>
                        <div className="input-row">
                            <button id='submitBtn' type="submit">Search</button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default observer(Weather)