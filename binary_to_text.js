const alphabet = {

    '01100001': 'a',
    '01100010': 'b',
    '01100011': 'c',
    '01100100': 'd',
    '01100101': 'e',
    '01100110': 'f',
    '01100111': 'g',
    '01101000': 'h',
    '01101001': 'i',
    '01101010': 'j',
    '01101011': 'k',
    '01101100': 'l',
    '01101101': 'm',
    '01101110': 'n',
    '01101111': 'o',
    '01110000': 'p',
    '01110001': 'q',
    '01110010': 'r',
    '01110011': 's',
    '01110100': 't',
    '01110101': 'u',
    '01110110': 'v',
    '01110111': 'w',
    '01111000': 'x',
    '01111001': 'y',
    '01111010': 'z',

    '01000001': 'A',
    '01000010': 'B',
    '01000011': 'C',
    '01000100': 'D',
    '01000101': 'E',
    '01000110': 'F',
    '01000111': 'G',
    '01001000': 'H',
    '01001001': 'I',
    '01001010': 'J',
    '01001011': 'K',
    '01001100': 'L',
    '01001101': 'M',
    '01001110': 'N',
    '01001111': 'O',
    '01010000': 'P',
    '01010001': 'Q',
    '01010010': 'R',
    '01010011': 'S',
    '01010100': 'T',
    '01010101': 'U',
    '01010110': 'V',
    '01010111': 'W',
    '01011000': 'X',
    '01011001': 'Y',
    '01011010': 'Z'

};

let binary = prompt('Type in something in binary! Separate bytes with spaces and words with underline characters! \nLike this: 01001000 01101001 _ 01110100 01101000 01100101 01110010 01100101 !');
let bytes = binary.split(' ');
let letters = [];
let html = '';

for (let i = 0; i < bytes.length; i++) {
    if (bytes[i] == '_') {
        letters.push(' ');
    } else if (bytes[i] === ".") {
        letters.push(".");
    } else if (bytes[i] === "!") {
        letters.push("!");
    } else if (bytes[i] === "?") {
        letters.push("?");
    } else if (bytes[i] === ",") {
        letters.push(",");
    } else if (bytes[i] === ";") {
        letters.push(";");
    } else if (bytes[i] === ":") {
        letters.push(":");
    } else if (bytes[i] === "/") {
        letters.push("/");
    } else if (bytes[i] === "=") {
        letters.push("=");
    } else
        letters.push(alphabet[bytes[i]]);
}

for (let i = 0; i < letters.length; i++) {
    html += letters[i];
}

document.querySelector('#output').innerHTML = html;