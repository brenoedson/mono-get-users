const input = document.querySelector('input');
const button = document.querySelector('button');
const paragraph = document.querySelector('p');

button.addEventListener('click', async (event) => {
    event.preventDefault();

    const inputValue = input.value;
    // console.log(input.value);
    input.value = '';

    const response = await fetch('http://127.0.0.1:3000/users');
    const data = await response.json();

    let found = false;

    const user = data.find(user => user.email === inputValue);

    if(!user){
        return paragraph.textContent = `Usuário não encontrado!`;
    }
    
    paragraph.textContent = `Usuário ${user.name} encontrado!`;
});
