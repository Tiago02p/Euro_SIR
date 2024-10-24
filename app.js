/*Este ficheiro faz a gestão de rotas e responde às requisições feitas pelo cliente.
O módulo Express é importado e uma nova instância da app é criada.
O app.use(express.static('public')) permite que o Express sirva os ficheiros estáticos da pasta public.
A rota /euro gera uma nova aposta quando chamada. Ela retorna um JSON com números e estrelas, usando a função generateBet.
Funções:
- generate(n, min, max): Gera um conjunto de n números aleatórios entre minimo e maximo.
- generateBet(): Chama a função generate para criar os números e estrelas da aposta.
- Iniciar o Server: O server está na porta 3000 localmente

Tiago Passos
*/

const express = require('express');
const app = express();

app.use(express.static('public'));

// Endpoint para gerar a aposta
app.get('/euro', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    return res.json(generateBet());
});

// Função para gerar números aleatórios
function generate(n, min, max) {
    let set = new Set();
    while (set.size < n) {
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        set.add(num);
    }
    return Array.from(set).sort((a, b) => a - b);
}

// Função que retorna a aposta com números e estrelas
function generateBet() {
    return {
        "numbers": generate(5, 1, 50),
        "stars": generate(2, 1, 12)
    };
}

// Inicia o servidor
app.listen(3000, () => {
    console.log("listening on port 3000");
});
