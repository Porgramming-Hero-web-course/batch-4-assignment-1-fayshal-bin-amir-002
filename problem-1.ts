const sumArray = (numbers: number[]): number => {
    let sum: number = numbers.reduce((acc, crr) => acc + crr, 0);  // applied reduce method to get the sum

    return sum;
}