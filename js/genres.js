

let moviesGenres=document.querySelector(".genrelistM")

fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=c71f5b75c8e3c6372967558c16ff597f")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let genrelistM=''
        for(i=0;i<data.genres.length;i++){
            genrelistM+=`//*<a href="./detail-genres.html?id=${data.genres[i].id}*//
            <li>${data.genres[i].name}
            `
            moviesGenres.innerHTML=genrelistM
        }
    })

    .catch(function(error){
        console.log("Error: " + error);
    })

    let seriesGenres=document.querySelector(".genrelistS")

    fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=c71f5b75c8e3c6372967558c16ff597f")
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
            let genrelistS=''
            for(let i=0;i<data.genres.length;i++){
                genrelistS+=`<li>${data.genres[i].name}</li>
                `
                seriesGenres.innerHTML=genrelistS
            }
        })

        .catch(function(error){
            console.log("Error: " + error);
        })