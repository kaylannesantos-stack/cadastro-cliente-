document.addEventListener('DOMContentLoaded', () => {
    
    const listaClientes = document.getElementById('lista-clientes')
    const clientes = JSON.parse(localStorage.getItem('clientes')) || []

    // 1. Verificação corrigida (.length) e aspas adicionadas
    if (clientes.length === 0) {
        listaClientes.innerHTML = '<li>Nenhum cliente cadastrado.</li>'
        return; // Retorna para não tentar rodar o forEach em um array vazio
    }

    clientes.forEach(cliente => { 
        // 2. Nome da variável corrigido para 'li'
        const li = document.createElement('li')
        li.innerHTML = `
            <strong>Nome:</strong> ${cliente.nome} <br>
            <strong>Email:</strong> ${cliente.email} <br>
            <strong>Telefone:</strong> ${cliente.telefone}
        `
        listaClientes.appendChild(li)
    });

})