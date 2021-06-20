
const fs = require('fs');

const colors = require('colors');


const crearArchivo = async (base=5, l=false, h=10) => {
    
    try {        
        
        let salida  = ""; 
        let consola = "";
    
        for (let index = 1; index<=h; index++) {
            
            salida  +=`${base} 'x' ${index} '=' ${ base * index }\n`;
            consola +=`${base} ${ 'x'.red } ${index} ${'='.red} ${ base * index }\n`;
        };
        
        if(l){
            console.log("============".white+"============".red);
            console.log(`     Tabla `.white,`del:`.red, colors.red(base) );
            console.log("============".red+"============".white);
            console.log(consola);
        }
        
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;
        
    } catch (err) {
        throw err;
    }
}


module.exports = {
    crearArchivo
}