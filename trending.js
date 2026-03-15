const API_KEY="518a02a1692ad7f0cd91df2695e8f6d4"

fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
.then(res=>res.json())
.then(data=>{

const container=document.getElementById("movies")

data.results.forEach(movie=>{

container.innerHTML+=`

<a href="movie.html?id=${movie.id}">
<img src="https://image.tmdb.org/t/p/w300${movie.poster_path}">
</a>

`

})

})