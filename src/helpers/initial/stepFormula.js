import {initialSegment} from "../index";
const { start, end } = initialSegment;

export function stepFormula(numberOfSplitPoints) {
    return (end - start) / (numberOfSplitPoints - 1);
}