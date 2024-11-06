interface Person {
    name: string
    age: number
    email: string
}

const validateKeys = <T extends Person>(obj: T, keys: (keyof T)[]): boolean => {
    return keys.every(key => key in obj);
};