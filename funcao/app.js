var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });

  function mimo(){
      const memimo = confirm('Enviar mimo para Ana de R$ 15,00')
      if(memimo == true){
          alert('Você sera direcionado ao mercado pago')
          location='https://mpago.la/33zmawn'
      } else{
          alert(':-( Nossa princesa só queria um mimo')
      }
  }

  function insta(){
      location='https://instagram.com/vendaspack73?utm_medium=copy_link'
  }

  function telegram(){
      alert('Sem link')
  }

  function whast(){
    alert('Sem link')
}

function pacote(){
    const pack = confirm('Você sera direcionado ao WhastApp')
    if(pack == true){
        location='https://api.whatsapp.com/send?phone=556135752752&text=Quero%20comprar%20um%20pacote%20de%20fotos%20da%20Ana%20Julia'
    }
}

function chve(){
    const chave = prompt('Digite o neumero da chave')
    if(chave == 'anachave2525'){
        alert('Acesso permitido')
    }
    else{
        alert('Acesso negado!')
    }
}

function compraChave(){
    const chaveAcesso = confirm('Você sera direcionado ao WhasApp!')
    if(chaveAcesso == true){
       location='https://api.whatsapp.com/send?phone=556135752752&text=Compra%20chave%20da%20modelo%20Ana'
    }
}

function irLoja(){
    location='https://lojapack.github.io/loja/'
}