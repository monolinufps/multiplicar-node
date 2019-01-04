//el objeto que se usar para  guardar el archivo
const archivo = require('fs');
const colors = require('colors');
// el alistar
let alistar = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            return reject('Error los valores ingresados no son numericos');
        }
        let numero = 1;
        let text = '';
        console.log('Multiplicacion'.green);
        text += `Esta es la Tabla del ${base}\n`;
        while (numero <= limite) {
            text += `${base} * ${numero} = ${base*numero}\n`;
            numero++;
        }
        return resolve(text);

    });
};
// crear archivo con las  tablas
let crear = (bases, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(bases) || !Number(limite)) {
            return reject('Error los valores ingresados no son numericos');
        }
        for (let contador = 1; contador <= limite; contador++) {
            data += `tabla  ${bases} * ${contador} = ${bases*contador}\n`;
        }

        archivo.writeFile(`tablaa/tabla-${bases}.txt`, data, (err) => {
            if (err) {
                reject('Error al guardar');
            }
            resolve(colors.green(`tabla-${bases}.txt`));
        });
    });
};
// las funciones q se pueden exportar
module.exports = {
    crear,
    alistar
};