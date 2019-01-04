//required, crea un objeto del modulo y usa sus funciones q  hemos  puesto , para exportar
const agv = require("./config/yargs").agv;
const funcion = require("./operacion/muti");
const colors = require('colors');
console.log('base ', agv.base, ' limite', agv.limite);

// acuerdo a la funcion que se elije de los agv
let comando = agv._[0];
switch (comando) {
    case 'listar':
        funcion.alistar(agv.base, agv.limite)
            .then(archivo => console.log(archivo))
            .catch(err => console.log(err));
        break;
    case 'crear':
        funcion.crear(agv.base, agv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('no reconocido');
}

// el archivo gitignore es como un bloqueo de las carpetas que no se subira al  repositorio