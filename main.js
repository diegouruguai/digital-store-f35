import {produtos} from './api.js';

produtos.forEach((produto) => {
    const div = document.createElement('div');
    div.className = 'produto';
    div.innerHTML = `
        <div class="card">

            <img src = "${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p>Preço: R$ ${produto.preco}</p>
            <buttom>Comprar</buttom>
        </div>
    `;
    document.body.appendChild(div);
})

