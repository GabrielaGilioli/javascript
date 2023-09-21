// Criando um array (ou vetor)

let equipe =["Christian Horner", "Hannah Schmitz","Gianpiero Lambiase","Red bull Racing"];

document.write('<h2 style="color: blue;">Criando um array (ou vetor)</h2><br>');


document.write("Os melhores profissionais de F1 são: "+equipe+ "<br><br>")

document.write("O melhor chefe de F1 é: <strong>" +equipe[0]+ "</strong><br>")
document.write("A melhor estrategista da F1 é: <strong>" +equipe[1]+ "</strong><br>")
document.write("O melhor engenheiro da F1 é: <strong>" +equipe[2]+ "</strong><br>")

document.write("A equipe n°1 de F1 é: <strong>" +equipe[3]+ "</strong><br>")


document.write("__________________________________________________________________<br>");

// ______________________________________________________________________________________

// ________________________________________________________________________________
// Array como matriz (array bidimensional)

document.write('<h2 style="color: blue;">Array como matriz (array bidimensional)</h2><br>');

let equipesF1 = [
    // 0           1             2
    ['Mercedes', 'Ferrari', 'Red Bull'], // 0

    // 0         1          2           3         4
    ['McLaren', 'Haas', 'AlphaTauri', 'Alpine', 'Williams'], // 1
];

// Exibir Red Bull

document.write(`Melhor de F1 da atualidade: <strong>${equipeF1[0][2]}</strong>`);
document.write(`A segunda melhor equipe de F1 da atualidade: <strong>${equipeF1[0][2]}</strong>`)

// 2ª Digitação (Aqui)