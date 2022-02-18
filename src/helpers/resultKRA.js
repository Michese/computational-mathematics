import {formulaCKRA, initialPointsGenerator, rungePrinciple} from ".";

export function resultKRA(derivativeFormula, initialStep, epsilon) {
    const isCKRA = derivativeFormula === formulaCKRA;

    let step = initialStep,
        previousPoints = [...initialPointsGenerator(step)],
        previous = derivativeFormula(previousPoints),
        currentPoints = [...initialPointsGenerator(step / 2.0)],
        current = derivativeFormula(currentPoints),
        R = rungePrinciple(previous, current, isCKRA);

    step /= 2.0;

    while (R >= epsilon) {
        previous = current;
        previousPoints = currentPoints;
        step /= 2.0;
        currentPoints = [...initialPointsGenerator(step)];
        current = derivativeFormula(currentPoints);
        R = rungePrinciple(previous, current, isCKRA);
    }
    return { R, kra: current };
}