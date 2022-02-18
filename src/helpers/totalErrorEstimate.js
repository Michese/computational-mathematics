import {machineEpsilon} from ".";
const { epsilon } = machineEpsilon;

export function totalErrorEstimate(M2, step) {
    return M2 * step / 2.0 + 2.0 * epsilon / step;
}