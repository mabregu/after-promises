let promises1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa 1');
    }, 3000);
});

let promises2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa 2');
    }, 1000);
});

let promises3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa 3');
    }, 2000);
});

let promises4 = new Promise((resolve, reject) => {
    reject('Promesa 4');
    //resolve('Promesa 4');
});

Promise.all([promises1, promises2, promises3, promises4])
    .then((mensajes) => {
        console.log('Todo fue bien :)', mensajes);
    })
    .catch((error) => {
        console.error('Alguna no resolvio :(', error);
    })
    .finally(() => {
        console.log('Finalizado');
    })
;