import axios from 'axios';


const URL = "https://corona.lmao.ninja/";
const GET_CONSOLIDATED_REPORT = URL.concat("all");
const GET_COUNTRY_REPOR_BY_NAME = URL.concat("countries/");
const URL_FOR_DAY_REPORT = URL.concat("v2/historical/");


const apiCalls = {
    
    getConsolidatedReport() {
        return this.doGETCall(GET_CONSOLIDATED_REPORT);
    },
    
    getAllCountreyReport() {
        return this.doGETCall(GET_COUNTRY_REPOR_BY_NAME.concat('?sort=active'));
    },
    
    getCountreyReportByName(COUNTRY_NAME) {
        return this.doGETCall(GET_COUNTRY_REPOR_BY_NAME.concat(COUNTRY_NAME));
    },

    getDayWiseCountreyReportByName(COUNTRY_NAME){
        return this.doGETCall(URL_FOR_DAY_REPORT.concat(COUNTRY_NAME));
    },

    doGETCall(REQUEST_URL) {
        return axios.get(REQUEST_URL)
            .then((res) => res.data)
            .catch((err) => {
                console.error(`Error in getCurrentWeather:  ${err}`);
            });
    }
}

export default apiCalls;