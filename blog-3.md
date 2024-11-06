# Why are Type Guards Necessary?

The type guards in typescript are useful because it will helps to narrow down the type of the value inside the code block and based on the conditions. Static Typing: TypeScript is statically typed (it can implicitly infer types) but not completely static; at runtime TypeScript cannot figure out what the type of a value is unless we tell it to. Through the use of type guards we can provide TypeScript hints as to what the type of a value is at a given point in our code, which allows us to safely use that value with type-specific properties or methods.

Otherwise, TypeScript treats the values as their supertype (think any or unknown), making them unable to have proper safety checks or autocompletions.

Four Type Guards and When to Use Them:

1. typeof Type Guard

Guard -- used for type checking of primitives (like: string, number, boolean)

Usage: (typeof value === 'type')

Use Case: We need to test if a given value is one of the 4 primitive types.

```typescript
function formatValue(value: string | number) {
    if(typeof value === 'string'){
        return value.trim();
    } else {
        return value.toFixed(2);
    }
}
```

2. in Type Guard

Name: HasOwnPropertyGuard Description: This guard checks for a particular property existing on a given object

Syntax: 'property' in value

Use Case: over here we want to check whether an object is containing a property or not (it may often be used with union types or an interface).

```typescript

interface Cat {
    type: 'cat';
    meow(): void;
}

interface Dog {
    type: 'dog';
    bark(): void;

}

type Pet = Cat | Dog;

makeSound(pet: Pet) {
    if ('meow' in pet) {
        pet.meow()
    } else {
        pet.bark()
    }
}
```

3. instanceof Type Guard

Type: Type guard - usage: To test whether an object is an instance of a class or constructor function.

Syntax: value instanceof ClassName

Use Case: When you are dealing with object types and want to test whether an object is an instance of a class or a subclass.

```typescript

class Person {
    constructor (public name: string) {}
}

function greet(person: Person | string) {
    if (person instanceof Person) {
        console.log(`Hello, ${person.name}`);
    } else {
        console.log(`Hello, ${person}`);
    }
}
```

4. Custom Type Guards (User-Defined Type Guards)

Return type: A function that returns a type predicate, which is a user-defined type guard. This is especially beneficial when dealing with complex or union types.

A function that returns a type predicate of the form (value is Type)

Use Case: When type conditions require some specificity or nuance.

```typescript
interface Cat {
    type: 'cat';
    meow(): void;
}

interface Dog {
    type: 'dog';
    bark(): void;
}

type Pet = Cat | Dog;

function makeSound(pet: Pet) {
    if ('meow' in pet) {
        pet.meow(); 
    } else {
        pet.bark();
    }
}

```