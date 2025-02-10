//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let names = [];
let atualName = '';

function addFriend(){  
    atualName = document.querySelector('input').value;
    if(atualName == '')
        alert('Por favor, Digite um nome válido!');
    else if(names.includes(atualName)){
        alert('Nome já foi adicionado');
    }
    else{
        names.push(atualName);
        updateList(atualName);
    }
    document.querySelector('input').value = '';
    }

function sortFriend(){
    document.getElementById('listaAmigos').innerHTML = '';
    if(names.length == 0){
        document.getElementById('resultado').innerHTML = 'Nenhum amigo para sortear';
        document.getElementById('sortear').setAttribute('disabled', true);
        return;
    }
    let sorteado = names[Math.floor(Math.random() * names.length)];
    document.getElementById('resultado').innerHTML = `O amigo sorteado foi: ${sorteado}`;
    names = names.filter((name) => name != sorteado);
}

function updateList(){
    let list = document.getElementById('listaAmigos');
    list.innerHTML = '';
    for(let i = 0; i < names.length; i++){
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(names[i]));
        list.appendChild(item);
    }
}