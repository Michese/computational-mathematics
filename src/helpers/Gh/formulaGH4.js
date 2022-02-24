import {M4} from "./M4";

export function formulaGH4(machineEpsilon, step) {
    return M4 * step**2 / 12 + 4 * machineEpsilon / step ** 2;
}