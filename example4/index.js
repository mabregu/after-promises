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
                fail('¿Quien es ese pokemon?');
            })
        ;
    });
    
    return promesa;
}

function renderPromise(promise) {
    container.innerHTML = `
    <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
        <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                <span class="text-sm font-bold">✓</span>
            </span> Id: ${promise.id}
        </li>
        <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                <span class="text-sm font-bold">✓</span>
            </span> Nombre: ${promise.name}
        </li>
        <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                <span class="text-sm font-bold">✓</span>
            </span> Tipo: ${promise.types[0].type.name}
        </li>
        <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                <span class="text-sm font-bold">✓</span>
            </span> Peso: ${promise.weight}
        </li>
        <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                <span class="text-sm font-bold">✓</span>
            </span> Altura: ${promise.height}
        </li>        
    </ul>
    <img src="${promise.sprites.front_default}" alt="${promise.name}">
    `;
}

function clearData() {
    container.innerHTML = '';
    input.value = '';
}

function fail(msj) {
    container.innerHTML = `
        <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl p-3">
            <span class="block text-red-600 xl:inline">${msj}</span>
        </h1>
    `;
}

btn.addEventListener('click', () => {
    let pokemon = input.value.toLowerCase();
    let promesa = getPokemon(pokemon);
    if (pokemon !== '') {
        promesa.then((data) => {
            console.log("pokedata", data);
            renderPromise(data);
        });
    } else fail('Tenes que ingresar un pokemon, picaron!');
});