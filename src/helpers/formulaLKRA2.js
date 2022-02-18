export function formulaLKRA2(arrayPoints) {
    return arrayPoints.map((point, index) => {
        if (index === 0 || index === arrayPoints.length - 1) return null;
        return (arrayPoints[index - 1].y - 2 * point.y + arrayPoints[index + 1].y) / ((arrayPoints[index + 1].x - arrayPoints[index - 1].x) ** 2)
    });
}