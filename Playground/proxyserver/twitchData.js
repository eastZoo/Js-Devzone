const axios = require('axios');
const { useCallback } = require('react');
const tcUrl = require('./config/twitch/url');

const twitchData = async (callback) => {
    const url = tcUrl.chatterUrl;
    try{
        const response = await axios.get(url);
        // response.data가 어떤 구조로 되어 있는 지를 보기 위해 console 사용.
        console.log(response.data)
        const {chatter_count,chatters} = response.data

        const chatter = {
            count: chatter_count,
            chatter: chatters
        };
        callback(undefined, {chatter});

    }catch(error){
        console.log('error broke out: ', error);
    }
}

module.exports = twitchData;