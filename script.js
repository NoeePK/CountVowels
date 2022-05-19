function countVowels(string) {
    string = string.toLowerCase();
    const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    let vowelsCount = 0;
 
    for (let letter of string) {
        if (voyelles.includes(letter)) {
            vowelsCount ++;
        }
    }
    return vowelsCount;
    
}

console.log("Votre texte contient"+vowelsCount.value+"voyelles.")