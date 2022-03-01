import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styles from '../styles/Airquality.module.css'

function Airquality ()  {

  const [airData, setAirData] = useState([]);

  useEffect(()=> {
      async function fetchAirData(){
        /* arrow function을 하고 싶으면..
        fetchAirData = async() => {} 으로 하면 됨. */
        const response = await axios.get('http://localhost:8000')

        /* const jsonResponseBodyItem = response.data
        response.data가 어떤 구조로 되어 있는 지를 보기 위해 console 사용.
        console.log("jsonResponseBodyItem from App", jsonResponseBodyItem.pm25)
        */
        const {location, time, pm10, pm25, no2} = response.data
        setAirData({location, time, pm10, pm25, no2})
      }
    fetchAirData()
  
  }, [])  // run the useEffect when the component is rendered first time only
 
  return (
    <ul className={styles.about__container}>
        <li>위치: {airData.location}</li>
        <li>시각: {airData.time}</li>
        <li>pm10: {airData.pm10}</li>
        <li>pm25: {airData.pm25}</li>
        <li>no2: {airData.no2}</li>
    </ul>
    )
}

export default Airquality;