export default (function() {
    let epsilon = 1.0,
        mantissa = 1;
    while(1.0 + epsilon > 1.0) {
        epsilon /= 2;
        mantissa++;
    }
    return { epsilon, mantissa };
})();