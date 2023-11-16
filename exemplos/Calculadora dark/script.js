/* Digite o JS aqui */

//Seleciona o elemento HTML com o id 'inputBox' e armazena-o na variável 'input'.
let input = document.getElementById('inputBox');

//Seleciona todos os elementos HTML do tipo 'button' e armazena-os em 'buttons'.
let buttons = document.querySelectorAll('button');

//Inicializa uma string vazia para armazenar a entrada do usuário.
let string = "";

//Converte a coleção de botões em um array para que possamos percorrer sobre eles.
let arr = Array.from(buttons);

//Percorre sobre cada botão no array 'arr'.
arr.forEach(button => {
    //Adiciona um ouvinte de eventos de clique a cada botão.
    button.addEventListener('click', (e) => {
        //Verifica se o texto dentro do botão clicado é '='.
        if (e.target.innerHTML == '=') {
            //A função eval () é uma função JavaScript que avalia e executa dinamicamente o código.Quando a linha é executada, o JavaScript interpreta o conteúdo de string como uma expressão e a avalia. No exemplo dado, eval("2 + 2") resultaria em 4, porque ele calcula a soma.
            string = eval(string);

            //Define o valor da caixa de entrada 'input' como a nova string calculada.
            input.value = string;
        }
        // Verifica se o texto dentro do botao clicado é 'AC' (Clear All).
else if (e.target.innerHTML == 'AC') {
    // Limpa a string, referindo-a como uma string vazia.
    string = "";
    // Define o valor da caixa de ntrada 'input' como uma string vazia.
    input.value = string;
}
// Verifica se o texto dentro do botão clicado é 'DEL' (Delete).
else if (e.target.innerHTML == 'DEL') {
    // Remove o último caractere de string.
    string = string.substring(0, string.length - 1);
    // Define o valor da caixa de entrada 'input' como a nova string após a remoção.
    input.value = string;
}
// Se nenhum dos casos anteriores corresponder,significa que é um dígito ou operador.
else {
    // Adiciona o texto do botão clicado á string de entrada.
    string += e.target.innerHTML;
    // Define o valor da caixa de entrada 'input' como a nova string de entrada.
    input.value = string;
}

})

})
