import axios from 'axios';


const URL_FOR_WORLD_REPORT = "https://corona.lmao.ninja/v2/";
const GET_CONSOLIDATED_REPORT = URL_FOR_WORLD_REPORT.concat("all");
const GET_COUNTRY_REPOR_BY_NAME = URL_FOR_WORLD_REPORT.concat("countries/");
const URL_FOR_DAY_REPORT = URL_FOR_WORLD_REPORT.concat("historical/");

const URL_FOR_INDIA_REPORT = "https://api.covid19india.org/";
const GET_STATE_REPORT = URL_FOR_INDIA_REPORT.concat("data.json");
const GET_STATE_DETAILS_REPORT = URL_FOR_INDIA_REPORT.concat("v2/state_district_wise.json");



const apiCalls = {

    getConsolidatedReport() {
        return this.doGETCall(GET_CONSOLIDATED_REPORT);
    },

    getAllCountreyReport() {
        return this.doGETCall(GET_COUNTRY_REPOR_BY_NAME.concat('?sort=cases'));
    },
    getTopAffectedCountreyReport() {
        return this.doGETCall(GET_COUNTRY_REPOR_BY_NAME.concat('?sort=active'));
    },

    getCountreyReportByName(COUNTRY_NAME) {
        return this.doGETCall(GET_COUNTRY_REPOR_BY_NAME.concat(COUNTRY_NAME));
    },

    getDayWiseCountreyReportByName(COUNTRY_NAME) {
        return this.doGETCall(URL_FOR_DAY_REPORT.concat(COUNTRY_NAME));
    },

    getAllIndiaStateDetails() {
        return this.doGETCall(GET_STATE_REPORT);
    },
    getAllIndiaDistrictDetails() {
        return this.doGETCall(GET_STATE_DETAILS_REPORT);
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