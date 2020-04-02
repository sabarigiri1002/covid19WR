import axios from 'axios';


const URL = "https://corona.lmao.ninja/";
const GET_CONSOLIDATED_REPORT = URL.concat("all");
const GET_COUNTRY_REPOR_BY_NAME = URL.concat("countries/");

const apiCalls = {
    getConsolidatedReport() {
        return this.doGETCall(GET_CONSOLIDATED_REPORT);
    },
    getCountreyReport(COUNTRY_NAME) {
        return this.doGETCall(GET_COUNTRY_REPOR_BY_NAME.concat(COUNTRY_NAME));
    },
    getAllCountreyReport() {
        return this.doGETCall(GET_COUNTRY_REPOR_BY_NAME.concat('?sort=todayCases'));
    },
    getCountreyReportByName(country) {
        return this.doGETCall(GET_COUNTRY_REPOR_BY_NAME.concat(country));
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