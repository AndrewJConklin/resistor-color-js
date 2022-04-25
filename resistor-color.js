export function colorCode(color) {
    if (color.includes("black")) {
        return 0
    }
    if (color.includes("brown")) {
        return 1
    }
    if (color.includes("red")) {
        return 2
    }
    if (color.includes("orange")) {
        return 3
    }
    if (color.includes("yellow")) {
        return 4
    }
    if (color.includes("green")) {
        return 5
    }
    if (color.includes("blue")) {
        return 6
    }
    if (color.includes("violet")) {
        return 7
    }
    if (color.includes("grey")) {
        return 8
    }
    if (color.includes("white")) {
        return 9
    }
}

export const COLORS = [];
