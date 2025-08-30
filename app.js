let amigos = []

function textoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

function adicionarAmigo(){
    let nomeInput = document.getElementById('amigo');
    let listaHTML = document.getElementById('listaAmigos');
    let nome = nomeInput.value;
    
    if (nome ===''){
        alert('Este campo não pode estar vazio. Tente novamente!')
        return;
}
    amigos.push(nome);
    nomeInput.value = '';
    console.log(amigos);
    atualizarLista();
} 

function atualizarLista(){
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = ''
   for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
         }}

function sortearAmigo(){
    if (amigos.length < 2){
        alert('Adicione amigos para realizar o sorteio!');
        return}
      let valorSorteado = Math.floor(Math.random() * amigos.length);
      let amigoSorteado = amigos[valorSorteado]
      let resultadoHTML = document.getElementById('resultado');
      resultadoHTML.innerHTML = `<p>O amigo sorteado foi: ${amigoSorteado}`;
}




