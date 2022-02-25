import {formulaGH3_r1, formulaGH3_r2} from ".";

export function formulaGH3(machineEpsilon, step) {
    return formulaGH3_r1(step) + formulaGH3_r2(machineEpsilon, step);
}