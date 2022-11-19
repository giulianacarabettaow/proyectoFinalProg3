let query= location.search
    let ObjQuery= new URLSearchParams(query)
    let id=ObjQuery.get('id')
    console.log(id)

let detailMovies=document.querySelector(".bordesDetail");
    detailMovies.style.display="flex";
    detailMovies.style.flexWrap="wrap";

let titulo=document.querySelector('.tituloMovie')



fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c71f5b75c8e3c6372967558c16ff597f`)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        titulo.innerText=data.original_title
        

        let detalles=`
        <img class='interstellarscreen' src='https://image.tmdb.org/t/p/w500/${data.poster_path}'>
        
        <p>Sinpsis: ${data.overview}</p> 
        <ul class="ulDetail">
        <li>Fecha de lanzamiento:${data.release_date}</li>
        <li>Calificación: ${data.vote_average} </li>
    
        <li>Duración: ${data.runtime} minutos </li>
        </ul>
        `
        detailMovies.innerHTML=detalles
    })

    .catch(function(error){
        console.log("Error: " + error);
    })
    


    
    let genres=document.querySelector(".genres")

    let infoGenres= ""

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c71f5b75c8e3c6372967558c16ff597f`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        for (let i=0; i> data.results.length; i++)
        genres +=`
      
        <li>Géneros: ${data.results[i].genres}</li>
      
        `
        genres.innerHTML=infoGenres
    })
    
    .catch(function(error){
        console.log("Error: " + error);
    })


    let detailMovieProvider = document.querySelector(".provider")
    let infoProvider=''


    fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=c71f5b75c8e3c6372967558c16ff597f`)   
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        
        for (let i=0; i<data.results.us; i++ ){
            infoProvider +=`
            <li>
                <img src='https://image.tmdb.org/t/p/w500/ ${data.results[i].logo_path}'>
            </li>
            `
        }

    })

    .catch(function(error){
        console.log("Error: " + error);
    })
