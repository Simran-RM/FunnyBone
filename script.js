
const container = document.getElementById('content');
const button = document.querySelector('button')
// fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
//     .then(response=>{
//         console.log(response);
//         return response.json();
//     })
//     .then(response=>{
//         const container = document.getElementsByClassName('container')[0]
//         if(response.type == 'single'){
//             console.log(response.joke)
//             container.innerText = response.joke
            
//         }else {
//             console.log(response.setup)
//             console.log(response.delivery)
//             container.innerText = response.setup;
//             setTimeout(() => {
//                 container.innerText = response.setup + '\n' + response.delivery;
//             }, 2000);
            
//         }
//     })


async function getJokes(){
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode');
    const joke = await response.json()
    if(joke.type == 'single'){
        console.log(joke.joke)
        container.textContent = joke.joke
    }else{
        console.log(joke.setup)
        console.log(joke.delivery)
        container.innerText = joke.setup;
        setTimeout(() => {
            container.innerText = joke.setup + '\n' + joke.delivery;
        }, 2000);
    }
}

button.addEventListener('click',getJokes);



