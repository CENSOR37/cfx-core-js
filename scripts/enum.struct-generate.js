const fs = require("fs");

// This function will convert snake_case to PascalCase
// ex: PED_CONFIG_FLAGS to PedConfigFlags

function getEnumName(name) {
    // Split the input string by underscores
    const words = name.split('_');

    // Capitalize the first letter of each word and convert the rest to lowercase
    const camelCasedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    // Join the words together without spaces
    const camelCasedString = camelCasedWords.join('');

    return `E${camelCasedString}`;
}


function generateNatives() {
    const path = "./bin/enums.json";
    if (!fs.existsSync(path)) throw new Error(`File ${path} not found`);
    const jsonFile = fs.readFileSync(path, "utf8");
    const enumDb = JSON.parse(jsonFile);
    const enums = new Array();
    let output = "";
    for (const enumInfo of enumDb) {
        const enumName = getEnumName(enumInfo.name);
        const values = enumInfo.values;
        output += `export enum ${enumName} {\n`;
        for (const val of values) {
            const name = val.name;
            const value = val.value;
            const comment = val.comment;
            output += `\t${name} = ${value},${comment ? ` // ${comment}` : ""}\n`;
        }
        output += `}\n\n`;


    }

    fs.writeFileSync(`./src/enums.ts`, output);


}

generateNatives();