export function formulaLKRA(arrayPoints) {
    return arrayPoints.map((point, index) => {
        if (index === 0) return null;
        return (point.y - arrayPoints[index - 1].y) / (point.x - arrayPoints[index - 1].x);
    })
}