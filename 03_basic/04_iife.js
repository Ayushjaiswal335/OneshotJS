// Immediately invoke function Expresion

(function chai(){ //Named IIFE
        console.log(`Db Connected`);
})();
((name)=>{
        console.log(`${name},Db Connected 2`);
})("Ayush")