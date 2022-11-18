let query= location.search
    let ObjQuery= new URLSearchParams(query)
    let id=ObjQuery.get('id')
    console.log(id)

let detailMovies=document.querySelector(".bordesDetail");
    detailMovies.style.display="flex";
    detailMovies.style.flexWrap="wrap";



fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c71f5b75c8e3c6372967558c16ff597f`)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)

        let detalles=`
        <article class='movieyseriesdetails'>
        <h3>${data.original_title}</h3>
        <img class='interstellarscreen' src='https://image.tmdb.org/t/p/w500/${data.poster_path}'>
        <p>Reseña: ${data.overview}</p> 
        <ul>
        <li> ${data.release_date}  </li>
        <li> ${data.vote_average} </li>
        </ul>
        </article>
        `
        detailMovies.innerHTML=detalles
    })

    .catch(function(error){
        console.log("Error: " + error);
    })
    

