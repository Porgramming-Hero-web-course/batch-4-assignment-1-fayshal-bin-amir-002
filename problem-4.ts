type Circle = {
    shape: "circle",
    radius: number
}

type Rectangle = {
    shape: "rectangle",
    width: number
    height: number
}

type CircleAndRectangle = Circle | Rectangle

const calculateShapeArea = (obj: CircleAndRectangle): number => {
    if (obj.shape === "circle") {
        return Number((Math.PI * Math.pow(obj.radius, 2)).toFixed(2));
    } else if (obj.shape === "rectangle") {
        return obj.width * obj.height;
    }
    return 0;
}