const body = document.body

const btn = document.querySelector('.btn')
const joke = document.querySelector('.joke')


btn.addEventListener('click',(e)=>{
   fetch('https://api.chucknorris.io/jokes/random')

    .then(res => res.json())
    .then(post => joke.textContent = post.value )
})