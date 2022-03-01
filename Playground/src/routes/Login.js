// import { useEffect } from 'react';
// import axios from 'axios';
// import api from '../api/api';
import { KAKAO_AUTH_URL } from "../modules/OAuth";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Login() {

  const [chatter, setChatter] = useState([]);

  useEffect(()=> {
      async function fetchChatterData(){
        /* arrow function을 하고 싶으면..
        fetchAirData = async() => {} 으로 하면 됨. */
        const response = await axios.get('http://localhost:8000/chatters')

        /* const jsonResponseBodyItem = response.data
        response.data가 어떤 구조로 되어 있는 지를 보기 위해 console 사용.
        console.log("jsonResponseBodyItem from App", jsonResponseBodyItem.pm25)
        */
        console.log(response);
        const {chatter_count, chatter} = response.data
        setChatter({chatter_count, chatter});
      }
      fetchChatterData()
  }, [])
  return(
      <div>
          <a href={KAKAO_AUTH_URL}>login</a>
          <Link to={`/Login/callback/twitch`}></Link>
          <div>
            시청자수 : {chatter.chatter_count}
          </div>
      </div>
  )
}
export default Login;
