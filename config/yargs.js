// esto es un objeto
const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const agv = require('yargs')
    .command('listar', 'Imprime  la tabla por consola', opt)
    .command('crear', 'Imprime  la tabla por consola', opt)
    .help()
    .argv;

//da entender las funciones que puede usar o algo asi :v
module.exports = {
    agv
};