export function rungePrinciple(previousDerivatives, derivatives, isCKRA = true) {
    const p = isCKRA ? 2 : 1;
    return Math.max(...previousDerivatives.map((num, index) => Math.abs((num - derivatives[index * 2])/(2**p - 1))));
}