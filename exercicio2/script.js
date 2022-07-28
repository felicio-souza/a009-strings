const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaStringAtul = minhaString.trim();
const fraseSubstituida = minhaStringAtul.replace(`________`, `sticionso`)

console.log(`
\nFrase original numero de caracteres: ${minhaString.length} 
\n Frase atual numero de caracteres: ${minhaStringAtul.length}
\n Frase substituida: ${fraseSubstituida}`)