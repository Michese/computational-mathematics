import {formulaGH2_r1, formulaGH2_r2} from "../index";

export function formulaGH2(machineEpsilon, step) {
    return formulaGH2_r1(step) + formulaGH2_r2(machineEpsilon, step);
}