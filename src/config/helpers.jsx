export const numberWithCommas = function (numberData) {
    if(!numberData){
        return 0;
    }
    return parseFloat(numberData).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};