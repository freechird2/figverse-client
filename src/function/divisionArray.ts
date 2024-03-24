export function divisionArray<T>(배열: Array<T>, 제한수: number) {
    const length = 배열.length
    const divide = Math.floor(length / 제한수) + (Math.floor(length % 제한수) > 0 ? 1 : 0)
    const newArray = []

    for (let i = 0; i < divide; i++) {
        // 배열 0부터 n개씩 잘라 새 배열에 넣기
        newArray.push(배열.slice(i * 제한수, 제한수 * (i + 1)))
    }

    return newArray
}
