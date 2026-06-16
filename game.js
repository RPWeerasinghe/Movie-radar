const movieInput = document.getElementById('movieInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click',function(){
    const movieInfo = movieInput.value;
    console.log("Movie Info:", movieInfo);

    
const url = `https://www.omdbapi.com/?apikey=YOUR_API_KEY_HERE&t=${movieName}`;;

    fetch(apiKey)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        console.log("API Response:", data);
    })
})