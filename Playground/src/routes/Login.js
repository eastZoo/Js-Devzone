// import { useEffect } from 'react';
// import axios from 'axios';
// import api from '../api/api';
import { KAKAO_AUTH_URL } from "../modules/OAuth";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Login() {

  const [chatters, setChatters] = useState([]);

  useEffect(() => {
    const response = await axios.get('http://localhost:8000/chatters')
    
  })
  return(
      <div>
          <a href={KAKAO_AUTH_URL}>login</a>
          <Link to={`/Login/callback/twitch`}></Link>
      </div>
  )
}
export default Login;
