import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdcaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');


export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerText = gera();
    })

}

function gera() {
    const senha = geraSenha(
        qtdcaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );
    return senha || 'Não foi possível gerar a senha';
}
