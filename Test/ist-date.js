exports.istDate = function () {
    let datev = new Date().getTime() + 5.5 * 3600 * 1000
    return new Date(datev);
}