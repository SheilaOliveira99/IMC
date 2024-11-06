export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),
  open() {
      Modal.wrapper.classList.add('open')
  },
  close() {
      Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonClose.onclick = () => {
  Modal.close()//chamando a função da linha 12
}

window.addEventListener('keydown', handleKeydown)//Estou criando um evento, 'keydown' = tecla digitada(nome do evento),
//e o segundo elemento seria o nome da função, 
function handleKeydown(event) {
  if (event.key === 'Escape') {
      Modal.close()
  }
}