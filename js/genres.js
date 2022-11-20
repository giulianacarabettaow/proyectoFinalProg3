let moviesGenres=document.querySelector(".genrelistM")

fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c71f5b75c8e3c6372967558c16ff597f")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        console.log(data.genres)
        console.log(data.genres.length)
        let genreListM=''
        for(let i=0;i<data.genres.length;i++){
            genreListM +=`
            <li class="liGenreListM>${data.genres[i].name}</li>
            `
        moviesGenres.innerHTML=genreListM
        }
    })
    .catch(function(error){
        console.log("Error: " + error);
    })

