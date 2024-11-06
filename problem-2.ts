const removeDuplicates = (numbers: number[]): number[] => {
    let newArr: number[] = [];
    numbers.forEach((num: number) => {
        if (!newArr.includes(num)) {
            newArr.push(num)
        }
    })

    return newArr;
}