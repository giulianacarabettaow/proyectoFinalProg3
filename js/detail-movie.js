    let query= location.search;
    let ObjQuery= new URLSearchParams(query);
    let id=ObjQuery.get('id');
    console.log(id)


let detailMovies=document.querySelector(".detalles");
    detailMovies.style.display="flex";
    detailMovies.style.flexWrap="wrap";

let titulo=document.querySelector('.tituloMovie')

let imagen=document.querySelector(".imagenDetalle")


fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c71f5b75c8e3c6372967558c16ff597f`)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data)
        titulo.innerText=data.original_title
        imagen.innerHTML=`<img class='interstellarscreen' src='https://image.tmdb.org/t/p/w500/${data.poster_path}'>`
        let favoritos=getStorage()
        let estaMiPelicula = favoritos.includes(data.id)
        let textoInicial = ''
        if (estaMiPelicula){
            textoInicial = "Sacar de Favoritos"
        } else{
            textoInicial = 'Añadir a Favoritos'
        }
        
        function getStorage(){
            let storage = localStorage.getItem('favoritos')
    
            if(storage !== null && storage !== undefined){
                return JSON.parse(storage)
            } else {
                return []
            }
        }
        let detalles=`
        
        <button class='botonfavoritos' >${textoInicial}</button>
        <p class="sinopsis">Sinopsis: ${data.overview}</p> 
        <ul class="ulDetail">
        <li>Fecha de lanzamiento:${data.release_date}</li>
        <li>Calificación: ${data.vote_average} </li>
        <li>Duración: ${data.runtime} minutos </li>
        </ul>
        `
        detailMovies.innerHTML=detalles
        let btnFavs= document.querySelector('.botonfavoritos')
        btnFavs.addEventListener('click', function(e){
            let favoritos= getStorage()
            let estaMiPelicula = favoritos.includes (data.id)

            if(estaMiPelicula){
                removeFavorite(data.id, favoritos)
                e.target.innerText= 'Añadir a favoritos' 
            }else{
                addFavorite(data.id, favoritos)
                e.target.innerText= 'Quitar de favoritos'

            }
        })
     
        
    })
        
    .catch(function(error){
        console.log("Error: " + error);
    })

function addFavorite(id, storage){
    storage.push(id)
    let storageToString= JSON.stringify(storage)
    localStorage.setItem('favoritos', storageToString)
}

function removeFavorite (id, storage){
    let position = storage.indexOf (id)
    storage.splice(position, 1)
    let storageToString = JSON.stringify (storage)
    localStorage.setItem('favoritos', storageToString)
}

  let ulGenero=document.querySelector(".detallesGen")

  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c71f5b75c8e3c6372967558c16ff597f`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.genres)

        let liGenero= ' '
         
        for(let i=0; i<data.genres.length;i++){
            renderizado=data.genres[i].name
            liGenero+= `
            <a href="./detail-genres.html?id=${data.genres[i].id}">
            <li>
            ${renderizado}</li>
            </a>
            `  
            ulGenero.innerHTML=liGenero
        }

        })
        
    
    .catch(function(error){
        console.log("Error: " + error);
    })



    let ulProvider=document.querySelector(".provider") 

    fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=c71f5b75c8e3c6372967558c16ff597f`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let provider=''
        for(let i=0;i<data.results.US.flatrate.length; i++){
            provider += `<li><img class="providerImg" src=https://image.tmdb.org/t/p/w500/${data.results.US.flatrate[i].logo_path} ></li>`

            ulProvider.innerHTML=provider
        }
        console.log(data.results.US.flatrate)
    })
        .catch(function(error){
        console.log("Error: " + error);
    })


