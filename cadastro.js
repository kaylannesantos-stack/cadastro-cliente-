function funcaoCadastrarCliente(){
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value

    // Ver
    if (!nome || !email || !telefone){
        alert('Por favor, preencha todos os campos')
        return
    }
    const novocliente = {nome, email, telefone}
    let listaclientes = JSON.parse(localStorage.getItem('clientes')) || []

    listaclientes.push(novocliente)
    
    localStorage.setItem('clientes', JSON.stringify(listaclientes))
    alert('Cliente cadastrado com sucesso!')

    document.getElementById('formulario-cadastro').reset()
}