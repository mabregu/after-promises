let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola Mundo');
    }, 3000);
});

promesa
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Finalizado');
    })
;