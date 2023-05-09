const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateRandomUppercase = () => String.fromCharCode(rand(65, 91));

const generateRandomLowercase = () => String.fromCharCode(rand(97, 123));

const generateRandomNumber = () => String.fromCharCode(rand(48, 58));

const symbols = `',.><!?/|"-+/*°{}[]()=^~`;
const generateRandomSimbol = () => symbols[rand(0, symbols.length)];

export default function generatePassword(
    quantity,
    upper,
    lower,
    numbers,
    symbols
) {
    if (!upper && !lower && !numbers && !symbols) return "Nada selecionado!";
    if (!quantity > 0) return "Digite uma quantidade!";
    quantity = Number(quantity);

    const passArray = [];

    for (let i = 0; i < quantity; i++) {
        passArray.push(callGenerator(rand(1, 5)));
    }
    return passArray.join("");
}

function callGenerator(number) {
    switch (number) {
        case 1:
            return generateRandomUppercase();
        case 2:
            return generateRandomLowercase();
        case 3:
            return generateRandomNumber();
        case 4:
            return generateRandomSimbol();
        default:
            return generateRandomUppercase();
    }
}
