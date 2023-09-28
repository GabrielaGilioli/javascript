document.write('<h2 style="color: blue;">Resolução</h2><br>');



// Digite a resolução do exercício aqui e visualize o resultado no navegador

let topModels = [
    "Gisele Bundchen", "Naomi Campbell", "Cara Delavigne", 
];

//Cache do tamanho do array
let tamanho = topModels.length;

for (let i = 0; i < tamanho; i++) {
    document.write(`<strong>${topModels[i]}</strong><br>`);
}



