let promises1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa 1');
    }, 2000);
});

let promises2 = new Promise((resolve, reject) => {    
    setTimeout(() => {
        resolve('Promesa 2');
    }, 1000);
});

Promise.race([promises1, promises2])
    .then((mensajes) => {
        console.log('Gano la carrera', mensajes);
    })
    .catch((error) => {
        console.error('Alguna rompe', error);
    })
    .finally(() => {
        console.log('Finalizado');
    })
;