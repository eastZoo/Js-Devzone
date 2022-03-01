// import { useEffect } from 'react';
// import axios from 'axios';
// import api from '../api/api';
import { KAKAO_AUTH_URL } from "../modules/OAuth";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";

function Login() {

  const [chatters, setChatters] = useState([]);

  const getChatters = async() => {
    const json = await(
      await fetch(
        `http://tmi.twitch.tv/group/user/ohsunny0731/chatters`
      )
    ).json();
    console.log(json);
    setChatters(json.chatters);

  };

  useEffect(() => {
    getChatters();
  }, [])

  return(
      <div>
          <a href={KAKAO_AUTH_URL}>login</a>
          <Link to={`/Login/callback/twitch`}></Link>
      </div>
  )
}
export default Login;
