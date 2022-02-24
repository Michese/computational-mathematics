import {M3} from "./M3";

export function formulaGH3(machineEpsilon, step) {
    return M3 * step ** 2 / 6 + machineEpsilon / step;
}