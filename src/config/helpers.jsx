export const numberWithCommas = function (numberData) {
    return parseFloat(numberData).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};