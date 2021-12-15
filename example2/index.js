let btn = document.getElementById('btn-promesa');
let clicks = 0;

btn.addEventListener('click', testPromise);

function testPromise() {
    let countClick = ++clicks;
    let log = document.getElementById('log');
    
    log.innerHTML = `<p>Click ${countClick}</p>`;
    
    let promesa = new Promise((resolve, reject) => {
        log.innerHTML += `<p>Promesa ${countClick}</p>`;
        
        setTimeout(() => {
            resolve(`setTimeout Promesa ${countClick}`);
        }, 3000);
    });
    
    promesa
        .then((mensaje) => {
            log.innerHTML += `<p>${mensaje}</p>`;
        })
        .catch((error) => {
            log.innerHTML += `<p>Error ${error}</p>`;
        })
    ;

    log.innerHTML += `<p>Fin ${countClick}</p>`;    
}