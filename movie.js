const API_KEY="518a02a1692ad7f0cd91df2695e8f6d4"

const params=new URLSearchParams(window.location.search)

const movieId=params.get("id")

const detailURL=`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`

const videoURL=`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`

fetch(detailURL)
.then(res=>res.json())
.then(data=>{

document.getElementById("movie-detail").innerHTML=`

<h1>${data.title}</h1>

<img src="https://image.tmdb.org/t/p/w500${data.poster_path}">

<p>${data.overview}</p>

`

})

document.getElementById("watchTrailer")
.addEventListener("click",()=>{

fetch(videoURL)
.then(res=>res.json())
.then(data=>{

const trailer=data.results.find(v=>v.type==="Trailer")

document.getElementById("trailerFrame").src=
`https://www.youtube.com/embed/${trailer.key}`

})

})

const recURL =
`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}`

fetch(recURL)
.then(res=>res.json())
.then(data=>{

const container=document.getElementById("recommendations")

data.results.slice(0,6).forEach(movie=>{

container.innerHTML+=`

<a href="movie.html?id=${movie.id}">
<img src="https://image.tmdb.org/t/p/w200${movie.poster_path}">
</a>

`

})

})