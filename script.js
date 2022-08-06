const inputTexto = document.querySelector('.campo1');
const mensagem = document.querySelector('.result');

function btnEncriptar() {

  const textoEncriptado = encriptar(inputTexto.value);
  mensagem.value = textoEncriptado;
  mensagem.style.backgroundImage='none';
}

function encriptar(stringEncriptada) {

  let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {

  const textoDesencriptado = desencriptar(inputTexto.value);
  mensagem.value = textoDesencriptado;
  mensagem.style.backgroundImage='none';
}

function desencriptar(stringDesencriptada) {

  let matrizCodigo = [['ai', 'a'], ['enter', 'e'], ['imes', 'i'], ['ober', 'o'], ['ufat', 'u']];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringDesencriptada.includes(matrizCodigo[i][0])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringDesencriptada;
}

function limpaTela() {

  document.getElementById('mytextarea').value = '';
  mensagem.style.backgroundImage='url("High\ quality\ products\ 1\ 1.svg")';
}

function atualizaTela() {

  mensagem.style.backgroundImage='url("High\ quality\ products\ 1\ 1.svg")';
  document.getElementsByName('result')[0].placeholder='Nenhuma mensagem encontrada';
}


window.onload = function() {

  var copyTextareaBtn = Array.prototype.slice.
    call(document.querySelectorAll('.textcopy'));
  var copyTextarea = Array.prototype.slice.
    call(document.querySelectorAll('.result'));
 
  copyTextareaBtn.forEach(function(btn, idx) {
 
    btn.addEventListener("click", function() {
 
      copyTextarea[idx].select();

      var msg = document.execCommand('copy') 
        ? 'funcionou' : 'deu erro';
      console.log('Comando para copiar texto ' + msg);

      limpaTela();
    });
  });
}

function backImage() {

  var image = document.getElementById('mytextarea').value = '';
  image.value = atualizaTela();
}  
