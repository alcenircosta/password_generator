import generatePassword from "./generators";

const passwordGenerated = document.querySelector(".password-generated");
const quantity = document.querySelector(".quantity");
const uppercase = document.querySelector(".uppercase");
const lowercase = document.querySelector(".lowercase");
const numbers = document.querySelector(".numbers");
const symbols = document.querySelector(".symbols");
const generate = document.querySelector(".generate-password");

export default () => {
    generate.addEventListener("click", () => {
        passwordGenerated.innerHTML = generatePass();
    });
};

function generatePass() {
    return generatePassword(
        quantity.value,
        uppercase.checked,
        lowercase.checked,
        numbers.checked,
        symbols.checked
    );
}
