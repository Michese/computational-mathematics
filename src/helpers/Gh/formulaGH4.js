import {formulaGH4_r1, formulaGH4_r2} from ".";

export function formulaGH4(machineEpsilon, step) {
    return formulaGH4_r1(step) + formulaGH4_r2(machineEpsilon, step);
}