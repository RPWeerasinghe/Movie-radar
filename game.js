const movieInput = document.getElementById('movieInput');
const searchBtn = document.getElementById('searchBtn');
const resultsDiv = document.getElementById('results');

searchBtn.addEventListener('click',function(){
    const movieInfo = movieInput.value;
    console.log("Movie Info:", movieInfo);

    const safeMovieInfo = encodeURIComponent(movieInfo);
    
const url = `https://api.tvmaze.com/singlesearch/shows?q=${safeMovieInfo}`;

    fetch(url)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log("API Response:", data);
       resultsDiv.innerHTML = `
            <img src="${data.image.medium}" alt="Movie Poster">
        <div class="info-content">
            <h2>${data.name}</h2>
            <p><strong>Premiered:</strong> ${data.premiered}</p>
            <p><strong>Genres:</strong> ${data.genres.join(', ')}</p>
             <p><strong>Summary:</strong> ${data.summary}</p>
        </div>
`;
    })
})