const fs = require("fs");
const { Native } = require("./Native");
const { header } = require("./header");

function generateNatives() {
    const path = "./bin/cfx-natives.json";
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

    let outputs = {};
    allNatives.forEach((nativeInfo) => {
        if (nativeInfo.namespace != "CFX") return;
        const apiset = nativeInfo.apiset;
        if (apiset != "client" && apiset != "server" && apiset != "shared") {
            console.log(`Unknown apiset ${apiset} for ${nativeInfo.nativeName}`);
            return
        }

        const native = new Native(nativeInfo);
        if (!outputs[apiset]) {
            outputs[apiset] = "";
        }
        const nativeOutput = native.generate();
        outputs[apiset] = `${outputs[apiset]}\n${nativeOutput}`;
    });

    for (const [apiset, output] of Object.entries(outputs)) {
        const fileOutput = `${header}\n\n${output}`;
        if (!fs.existsSync(`./src/${apiset}`)) {
            fs.mkdirSync(`./src/${apiset}`);
        }
        fs.writeFileSync(`./src/${apiset}/natives.ts`, fileOutput);
    }
}

generateNatives();