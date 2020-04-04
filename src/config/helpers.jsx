export const numberWithCommas = function (numberData) {
    if(!numberData){
        return "";
    }
    return parseFloat(numberData).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};