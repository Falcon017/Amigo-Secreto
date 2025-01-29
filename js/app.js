let amigos = [];

function adicionar(){
    let nomeDoAmigo = document.getElementById('nome-amigo');
        if(nomeDoAmigo.value == ''){
        alert('Favor informar um nome!');
        return;
        } 

    if(amigos.includes(nomeDoAmigo.value)){
     alert('Nome já adicionado!');
     return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push (nomeDoAmigo.value);
        if (lista.textContent == '') {
            lista.textContent = nomeDoAmigo.value;
        }else{
            lista.textContent = lista.textContent + ', ' + nomeDoAmigo.value;
    }
    nomeDoAmigo.value = '';
}
function sortear(){
        if (amigos.length < 4){
        alert('O minimo para sorteio é 4 nomes!');
        return;
        }
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');

        for (let i =0; i < amigos.length; i++){
            
        if (i == amigos.length - 1){
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        }else{
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i+1] + '<br>';
        }
        }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}