const fs = require("fs");
const { Native } = require("./Native");
const { header } = require("./header");

function generateNatives() {
    const path = "./bin/gta-natives.json";
    if (!fs.existsSync(path)) throw new Error(`File ${path} not found`);
    const nativeDB = JSON.parse(fs.readFileSync(path, "utf8"));
    const allNatives = new Array();

    for (const [namespace, natives] of Object.entries(nativeDB)) {
        for (const [hash, native] of Object.entries(natives)) {
            native.hash = hash;
            native.namespace = namespace;
            allNatives.push(native);
        }
    }

    // Sort by name
    allNatives.sort((a, b) => {
        if (a.nativeName > b.nativeName) {
            return 1;
        } else {
            return -1;
        }
    });

    let output = header;
    allNatives.forEach((nativeInfo) => {
        const native = new Native(nativeInfo);
        output = output.concat(native.generate());
    });

    if (!fs.existsSync("./src/natives")) {
        fs.mkdirSync("./src/natives");
    }
    fs.writeFileSync("./src/natives/index.ts", output);

}

generateNatives();