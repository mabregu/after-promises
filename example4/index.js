const URL = 'https://pokeapi.co/api/v2/pokemon/';
let container = document.getElementById('pokemon-container');
let btn = document.getElementById('btn-pokemon');
let input = document.getElementById('input-pokemon');
let failMessage = document.getElementById('fail-message');

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
    let ability = promise.abilities.map((item) => {
        return item.ability.name;
    });
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
            </span> Peso: ${promise.weight} - Altura: ${promise.height}
        </li>
        <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                <span class="text-sm font-bold">✓</span>
            </span> Habilidades: ${ability.join(', ')}
        </li>
    </ul>
    <span class="inline-flex items-baseline">
        <img class="self-center rounded-full mx-1" src="${promise.sprites.front_default}" alt="${promise.name}">
        <img class="self-center rounded-full mx-1" src="${promise.sprites.back_default}" alt="${promise.name}">
    </span>
    `;
}

function clearData() {
    container.innerHTML = '';
    input.value = '';
    input.classList.remove('border-red-500');
}

function fail(msj) {
    container.innerHTML = `
        <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl p-3">
            <span class="block text-red-600 xl:inline">${msj}</span>
        </h1>
    `;
    
    input.classList.add('border-red-500');
}

btn.addEventListener('click', () => {
    let pokemon = input.value.toLowerCase();
    let promesa = getPokemon(pokemon);
    if (pokemon !== '') {
        promesa.then((data) => {
            input.classList.remove('border-red-500');
            renderPromise(data);
        });
    } else fail('Tenes que ingresar un pokemon, picaron!');
});