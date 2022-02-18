export function formulaPKRA(arrayPoints) {
    return arrayPoints.map((point, index) => {
        if (index === arrayPoints.length - 1) return null;
        return (arrayPoints[index + 1].y - point.y) / (arrayPoints[index + 1].x - point.x);
    })
}