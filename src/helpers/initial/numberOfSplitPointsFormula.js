import {initialSegment} from "../index";
const { start, end } = initialSegment;

export function numberOfSplitPointsFormula(step) {
    return Math.floor((end - start) / step) + 1;
}