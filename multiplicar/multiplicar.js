const fs = require('fs');


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
        }

        let data = '';
        for (let i = 0; i < limite; i++) {
            data += `${ base } * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });
    });
}

module.exports = {
    crearArchivo
}