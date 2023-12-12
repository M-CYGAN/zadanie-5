const btn = document.querySelector('#submitBtn')

let list = [];

btn.addEventListener('click', evt =>{
    evt.preventDefault();

    const name = document.querySelector('#textName');
    const age = document.querySelector('#numAge');
    const usersList = document.querySelector('#display');


    const user = {
        userName: name.value,
        userAge: age.value
    };

    list.push(user)

    usersList.innerHTML += `<li>${name.value}, lat ${age.value}</li>`;
})