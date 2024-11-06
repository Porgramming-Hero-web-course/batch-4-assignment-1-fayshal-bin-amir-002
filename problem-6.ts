interface Profile {
    name: string
    age: number
    email: string
}

type Updates<T> = {
    [P in keyof T]?: T[P];
};


const updateProfile = <Person>(profile: Profile, obj: Updates<Person>): Profile => {
    return {
        ...profile,
        ...obj
    }
}