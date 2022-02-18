import { initialSegment, initialFunction, numberOfSplitPointsFormula } from ".";
const { start } = initialSegment;

export function* initialPointsGenerator(step) {
    const numberOfSplitPoints = numberOfSplitPointsFormula(step);
    for (let count = 0; count < numberOfSplitPoints; count++) {
        const x = start + count * step;
        yield { x, y: initialFunction(x) }
    }
}