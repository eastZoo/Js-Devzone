const axios = require('axios');
const serviceKey = require('./config/key.js');
const aqiUrl = require('./config/url');

const axdata = async (stationName, callback) => {
    const url = aqiUrl.airUrl;
    const ServiceKey = decodeURIComponent(serviceKey.publicPortalkey);

    try{
        const response = await axios.get(url,
            {
                params:
                {
                    dataTerm: 'DAILY',
                    stationName: stationName,
                    pageNo: '1',
                    numOfRows: '1',
                    ver:'1.3',
                    returnType: 'json',
                    serviceKey: ServiceKey
                }
            }
        );
        // response.data가 어떤 구조로 되어 있는 지를 보기 위해 console 사용.
        console.log(response.data)
        const {dataTime,pm10Value,pm25Value,no2Value} = response.data.response.body.items[0];
        console.log("response.data.response.body from axdata", response.data.response.body);
        const airquality = {
            location: stationName,
            time: dataTime,
            pm10: pm10Value,
            pm25: pm25Value,
            no2: no2Value
        };
        callback(undefined, {airquality});

    }catch(error){
        console.log('error broke out: ', error);
    }
}

module.exports = axdata;