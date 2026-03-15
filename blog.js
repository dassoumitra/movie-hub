const articles = {

1: {
title: "Top 10 Best Netflix Movies",
content: `
<p>Netflix has thousands of movies available. Here are the top 10 best movies you should watch.</p>

<ul>
<li>Extraction</li>
<li>The Irishman</li>
<li>Bird Box</li>
<li>Red Notice</li>
<li>The Gray Man</li>
</ul>
`
},

2: {
title: "Best Horror Movies of All Time",
content: `
<p>If you love horror movies, these films are considered the best ever made.</p>

<ul>
<li>The Exorcist</li>
<li>Hereditary</li>
<li>The Conjuring</li>
<li>Halloween</li>
<li>Get Out</li>
</ul>
`
},

3: {
title: "Movies Like Interstellar",
content: `
<p>If you enjoyed Interstellar, these sci-fi movies have similar themes.</p>

<ul>
<li>Arrival</li>
<li>Gravity</li>
<li>2001: A Space Odyssey</li>
<li>Ad Astra</li>
<li>The Martian</li>
</ul>
`
},

4: {
title: "Top Bollywood Movies This Month",
content: `
<p>These Bollywood movies are trending this month.</p>

<ul>
<li>Animal</li>
<li>Pathaan</li>
<li>Jawan</li>
<li>RRR</li>
<li>KGF</li>
</ul>
`
}

}

const params = new URLSearchParams(window.location.search)

const id = params.get("id")

if(id && articles[id]){

document.getElementById("article-content").innerHTML = `
<h2>${articles[id].title}</h2>
${articles[id].content}
`

}