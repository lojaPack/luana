function chamaAlert(){
    alert('Estamos montando um app')
}

var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
});

const perfil = document.getElementById('chamaOpcs');

function toggleMenu(){
    PerfilUsusario.style.display='block'
    mais.style.display='none'
}

perfil.addEventListener('click', toggleMenu);

/*=============================*/

const saber = document.getElementById('chamaPerfil');

function esconder(){
    mais.style.display='block'
    PerfilUsusario.style.display='none'
}

saber.addEventListener('click', esconder);

/*=============================*/

const fechar = document.getElementById('fechaUser');

function fechaUser(){
    PerfilUsusario.style.display='none'
}

fechar.addEventListener('click', fechaUser)

/* ================*/
function pago(){
    alert('A Luana não esta vendendo a chave no momento')
    /*PerfilUsusario.style.display='block'
    mais.style.display='none'*/
}

function chamaAcesso(){
    const chave = prompt('Digite ou cole a chave!')
    if(chave == 'to154fsd1'){
        alert('Acesso permitido')
    } else {
        alert('Acesso negado!')
    }
}

/*======== links ===========*/

function irInicio(){
    location='https://lojapack.github.io/loja/'
}

function pacoteFotos(){
    alert('A Luana removeu o link')
}

function inta(){
    location='https://instagram.com/lu_sexy12?utm_medium=copy_link'
}

function mandaMimo(){
    const mimo = confirm('Você sera direcionado ao Mercado Pago')
    if(mimo == true){
        location='https://mpago.la/33zmawn'
    }
}