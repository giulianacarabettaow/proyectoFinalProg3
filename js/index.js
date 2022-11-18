let categories=document.querySelector(".categories.masvistas");
    categories.style.display="flex";
    categories.style.flexWrap="wrap";
    
let info = ''

fetch("https://api.themoviedb.org/3/movie/popular?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    for(let i=0; i < 8; i++){
        info +=`
        <li>
        <img src= 'https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}' alt=''/>
        <p>Name: ${data.results[i].original_title}</p>
        </li>`
    }
    categories.innerHTML= info
})
.catch(function(error){
    console.log("Error: " + error);
})














































let categoriesSeriesMasValoradas=document.querySelector(".categories.seriesmasvaloradas")
categoriesSeriesMasValoradas.style.display="flex";
categoriesSeriesMasValoradas.style.flexWrap="wrap"

    let infoSMasValoradas = ''

fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=c71f5b75c8e3c6372967558c16ff597f")}
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
        for(let i=0; i < 8; i++){
            info +=`
            <li>
            <img src= 'https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}' alt=''/>
            </li>`
        }
    })

    .catch(function(error){
        console.log("Error: " + error);
    })
    