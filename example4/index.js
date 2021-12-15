const URL = 'https://pokeapi.co/api/v2/pokemon/';
let container = document.getElementById('pokemon-container');
let btn = document.getElementById('btn-pokemon');
let input = document.getElementById('input-pokemon');

function getPokemon(param) {
    let url = URL + param;
    
    let promesa = new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
                container.innerHTML = `
                    <label style="background-color:red;">
                        ¿Quien es ese pokemon?
                    </label>
                `;
            })
        ;
    });
    
    return promesa;
}

function renderPromise(promise) {
    container.innerHTML = `
    <p>
        Id: ${promise.id}<br>        
        Nombre: ${promise.name}<br>
        Tipo: ${promise.types[0].type.name}<br>
        Peso: ${promise.weight}<br>
        Altura: ${promise.height}<br>
    </p>
    <img src="${promise.sprites.front_default}" alt="${promise.name}">
    `;
}

function clearData() {
    container.innerHTML = '';
    input.value = '';
}

btn.addEventListener('click', () => {
    let pokemon = input.value;
    let promesa = getPokemon(pokemon);
    
    if (pokemon !== '') {
        promesa.then((data) => {
            renderPromise(data);
        });
    } else {
        container.innerHTML = `
            <label style="background-color:yellow;">
                tienes que ingresar un pokemon
            </label>
        `;
    }
});