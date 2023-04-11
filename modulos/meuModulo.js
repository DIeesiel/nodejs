/*function minhaFuncao() {
    console.log("Olá do meu módulo!");
    }
    
    module.exports = {
    minhaFuncao: minhaFuncao
}; */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o segundo número: ', (num2) => {
    rl.question('Digite a operação (+, -, * ou /): ', (operacao) => {
      let resultado;

      switch (operacao) {
        case '+':
          resultado = parseFloat(num1) + parseFloat(num2);
          break;
        case '-':
          resultado = parseFloat(num1) - parseFloat(num2);
          break;
        case '*':
          resultado = parseFloat(num1) * parseFloat(num2);
          break;
        case '/':
          resultado = parseFloat(num1) / parseFloat(num2);
          break;
        default:
          console.log('Operação inválida.');
          rl.close();
          return;
      }

      console.log(`O resultado é: ${resultado}`);
      rl.close();
    });
  });
});
