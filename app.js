const form = document.querySelector('form');
const input = document.getElementById('searchInput');
const button = document.getElementById('btn');
const output = document.getElementById('output');
const tOutput = document.getElementById('toutput');


let inputData = "";

async function getAyah(ayahNumber) {

    inputData = input.value;

    const url = `http://api.alquran.cloud/v1/ayah/${ayahNumber}`;
    const url2 = `http://api.alquran.cloud/v1/ayah/${ayahNumber}/en.asad`;

    const response = await fetch(url);
    const result = await response.json();
    const ayah = result.data.text;
    output.innerText = ayah;

    const response2 = await fetch(url2);
    const result2 = await response2.json();
    const translation = result2.data.text;
    tOutput.innerText = translation;


}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ayahNumber = input.value;
    getAyah(ayahNumber);
})