export const countCorrectSymbols = (userInput) => {
    // // // Parse text and remove white space
         const parsedText = text.replace(' ','')
         return userInput.replace( ' ', '').split('').filter((s,i) => s === parsedText[i]).length;
}