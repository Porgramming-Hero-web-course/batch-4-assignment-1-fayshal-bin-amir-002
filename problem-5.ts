const getProperty = <T, X extends keyof T>(obj: T, key: X) => {
    return obj[key];
}