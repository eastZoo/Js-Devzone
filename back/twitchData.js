const axios = require('axios');
const tcUrl = require('./config/twitch/url');

const jingburgerData = async (callback) => {
    const url = tcUrl.jingburgerUrl;
    try{
        const response = await axios.get(url);
        // response.data가 어떤 구조로 되어 있는 지를 보기 위해 console 사용.
        console.log(response.data)
        const {chatter_count,chatters} = response.data

        const chatter = {
            jingcount: chatter_count,
            jingchatter: chatters
        };
        callback(undefined, {chatter});

    }catch(error){
        console.log('error broke out: ', error);
    }
}

const jururuData = async (callback) => {
    const url = tcUrl.jururuUrl;
    try{
        const response = await axios.get(url);
        // response.data가 어떤 구조로 되어 있는 지를 보기 위해 console 사용.
        console.log(response.data)
        const {chatter_count,chatters} = response.data

        const chatter = {
            jucount: chatter_count,
            juchatter: chatters
        };
        callback(undefined, {chatter});

    }catch(error){
        console.log('error broke out: ', error);
    }
}

const goseguData = async (callback) => {
    const url = tcUrl.goseguUrl;
    try{
        const response = await axios.get(url);
        // response.data가 어떤 구조로 되어 있는 지를 보기 위해 console 사용.
        console.log(response.data)
        const {chatter_count,chatters} = response.data

        const chatter = {
            gocount: chatter_count,
            gochatter: chatters
        };
        callback(undefined, {chatter});

    }catch(error){
        console.log('error broke out: ', error);
    }
}

module.exports = { jingburgerData, jururuData, goseguData };