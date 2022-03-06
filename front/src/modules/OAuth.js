// OAuth.js 라는 컴포넌트를 따로 생성하여 관리하였음


const CLIENT_ID = "7vc748yqx23emfsp7vt695wmsjwfea";
const REDIRECT_URI =  "http://localhost:3000/Live/callback/twitch";

export const TWITCH_AUTH_URL = `https://id.twitch.tv/oauth2/authorize?&response_type=token&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=viewing_activity_read`;