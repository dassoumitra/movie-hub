const API_KEY = "518a02a1692ad7f0cd91df2695e8f6d4"

const IMG_PATH = "https://image.tmdb.org/t/p/w500"

let currentPage = 1

const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")

getMovies()

function getMovies(page=1){

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`)
.then(res=>res.json())
.then(data=>showMovies(data.results))

}

function showMovies(movies){

main.innerHTML=""

movies.forEach(movie=>{

const {title,poster_path,vote_average,overview,id} = movie

const movieEl = document.createElement("div")

movieEl.classList.add("movie")

movieEl.innerHTML=`

<a href="movie.html?id=${id}">
<img src="${IMG_PATH+poster_path}">
</a>

<div class="movie-info">
<h3>${title}</h3>
<span class="${getColor(vote_average)}">${vote_average}</span>
</div>

<div class="overview">
${overview}

<button onclick="addWatchlist(${id})">
Watchlist
</button>

</div>

`

main.appendChild(movieEl)

})

}

function getColor(vote){

if(vote>=8) return "green"
else if(vote>=5) return "orange"
else return "red"

}

form.addEventListener("submit",(e)=>{

e.preventDefault()

const searchTerm = search.value

fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`)
.then(res=>res.json())
.then(data=>showMovies(data.results))

})

function nextPage(){

currentPage++
getMovies(currentPage)

}

function prevPage(){

if(currentPage>1){

currentPage--
getMovies(currentPage)

}

}

function addWatchlist(id){

let watchlist = JSON.parse(localStorage.getItem("watchlist")) || []

watchlist.push(id)

localStorage.setItem("watchlist",JSON.stringify(watchlist))

alert("Added to watchlist")

}

fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
.then(res=>res.json())
.then(data=>{

const slider=document.getElementById("trending")

data.results.slice(0,10).forEach(movie=>{

slider.innerHTML+=`
<img src="${IMG_PATH+movie.poster_path}">
`

})

})

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
.then(res=>res.json())
.then(data=>{

data.genres.forEach(g=>{

const option=document.createElement("option")

option.value=g.id
option.textContent=g.name

document.getElementById("genre").appendChild(option)

})

})