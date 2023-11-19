const fs = require("fs");

const DB_API = `https://api.github.com/repos/vhub-team/native-db/releases`


/* async function downloadJsonNative() {
    const response = await fetch(NATIVE_DB.GTA5);
    const data = await response.json();
    const nativeDB = {};
    for (const [namespace, natives] of Object.entries(data)) {
        const nativesMap = {};
        for (const [hash, native] of Object.entries(natives)) {
            const parameters = []
            for (const [index, parameter] of Object.entries(native.params)) {
                const parameterInfo = {
                    name: getParameterName(parameter.name),
                    type: getParameterType(parameter.type),
                    ref: isParameterReference(parameter.type)
                }
                parameters.push(parameterInfo)
            }
            const nativeInfo = {
                nativeName: getNativeName(native.name),
                namespace: namespace,
                name: native.name,
                hash: hash,
                params: parameters,
                comment: native.comment,
            }
            const results = getResult(nativeInfo, native.return_type);
            nativeInfo.results = results;
            nativesMap[nativeInfo.hash] = nativeInfo;
        }
        nativeDB[namespace] = nativesMap;
    }
    if (!fs.existsSync("./bin")) {
        fs.mkdirSync("./bin");
    }
    const output = JSON.stringify(nativeDB, null, 4);
    fs.writeFile(`./bin/gta-natives.json`, output, (err) => {
        if (err) {
            console.error(err);
            return;
        };
    });
}

downloadJsonNative();
 */


async function downloadEnumAndStruct() {
    const response = await fetch(DB_API);
    const data = await response.json();
    if (!data) throw new Error("No data");
    if (!data[0]) throw new Error("No data");
    if (!data[0].assets) throw new Error("No assets");

    const assets = data[0].assets;


    for (let i = 0; i < assets.length; i++) {
        const asset = assets[i];
        const downloadUrl = asset.browser_download_url;
        const fileName = asset.name;
        if (fileName == "functions.json") continue;
        const jsonContent = await fetch(downloadUrl);
        const data = await jsonContent.json();

        if (!fs.existsSync("./bin")) {
            fs.mkdirSync("./bin");
        }
        const filePath = `./bin/${fileName}`;
        
        const output = JSON.stringify(data, null, 4);
        fs.writeFile(filePath, output, (err) => {
            if (err) {
                console.error(err);
                return;
            };
        });
    }
}

downloadEnumAndStruct();