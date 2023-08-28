let container = document.querySelector('.favs-container');
let listContainer= document.querySelector('.list-container')

window.addEventListener('load', function(){
    let favs= getFavsStorage ()
    if (favs.length == 0){
        container.innerHTML = `
        <li>
        <h3> No tienes favoritos </h3> 
        </li>
        `
    } else{
        // listContainer.innerHTML += `
        // <h2> 
        // Tienes ${favs.length} favoritos. 
        // </h2>
        // `
        getAllFavsAndPrint (favs)
    }
})


function getFavsStorage(){
    let storage= localStorage.getItem('favoritos')

    if(storage !== null && storage !== undefined){
        return JSON.parse(storage)
    } else{
        return []
    }
}

function getAllFavsAndPrint (arrFavs){ 
    for(let i=0 ; i< arrFavs.length ; i++){ 
        fetch(`https://api.themoviedb.org/3/movie/${arrFavs[i]}?api_key=c71f5b75c8e3c6372967558c16ff597f`)
        .then(function(resp){
            return resp.json() 
        })
        .then(function(data){ 
            
            console.log(data) 
            container.innerHTML += `
            <li>
                <article>
                    <img class='interstellarscreen' src='https://image.tmdb.org/t/p/w500/${data.poster_path}'
                    <p>${data.title}</p>
                    </a>
                </article>
            </li>
            `
        })
        .catch(function(error){
            console.log(error)
        })
    }
}
