export function formulaCKRA(arrayPoints) {
    return arrayPoints.map((_, index) => {
        if (index === 0 || index === arrayPoints.length - 1) return null;
        return (arrayPoints[index + 1].y - arrayPoints[index - 1].y) / (arrayPoints[index + 1].x - arrayPoints[index - 1].x);
    })
}