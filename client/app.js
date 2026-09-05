//const input = document.querySelector('input');
const btnIndex = document.querySelector('#btn-index');
const btnLogin = document.querySelector('#btn-login');
const btnHome = document.querySelector('#btn-home');

const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
//const paragraph = document.querySelector('p');

if (btnIndex){
    btnIndex.addEventListener('click',() => (window.location.href = './pages/login.html'));
}

if (btnLogin){
    // async e await são comandos necessários para definir rotinas assíncronas, que podem demorar para responder
    // dessa forma, a rotina esperará a resposta antes de prosseguir com o script
    btnLogin.addEventListener('click', async (event) => {
        // Precisamos prevenir o comportamento padrão do botão, o 'submit'.
        // O botão está dentro de um formulário, e o padrão, ao clicar no botão, é pegar os dados do formulário e enviar para
        // algum canto, mas esse canto ainda não existe, essa nova página ainda não foi criada.
        // Para evitar isso, nós utilizamos a rotina preventDefault
        event.preventDefault();

        const emailValue = email.value;
        const passwordValue = password.value;

        const response = await fetch('http://localhost:3000/users');
        // pegar a resposta da requisição fetch e extrair os dados no formato JSON
        const data = await response.json();

        const user = data.find((user) => (
            user.email === emailValue && user.password === passwordValue
        )); // no find() acima usamos parênteses em vez das chaves {} porque dessa forma fica dispensado o uso do return

        //Caso email ou senha não sejam encontrados, exibe a mensagem de email e senha inválidos
        // Caso seja encontrado, exibe 'acesso permitido' e vai para a nova página
        if(!user) return window.alert('Email e/ou senha inválidos!');
        window.alert('Acesso permitido!');
        window.location.href = './home.html';

        console.log(emailValue, passwordValue, data);
    });
}

if(btnHome){
    btnHome.addEventListener('click', () => {
        setTimeout(() => {},0);
        setTimeout(() => {},1000);
        setTimeout(() => {},2000);
        window.location.href = './login.html';
    });
}



// button.addEventListener('click', async (event) => {
//     event.preventDefault();

//     const inputValue = input.value;
//     // console.log(input.value);
//     input.value = '';

//     const response = await fetch('http://127.0.0.1:3000/users');
//     const data = await response.json();

//     const user = data.find(user => user.email === inputValue);

//     if(!user){
//         return paragraph.textContent = `Usuário não encontrado!`;
//     }
//     paragraph.textContent = `Usuário ${user.name} encontrado!`;
// });
