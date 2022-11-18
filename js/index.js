let categoriesMasVistas=document.querySelector(".categories.masvistas");
    categoriesMasVistas.style.display="flex";
    categoriesMasVistas.style.flexWrap="wrap";
    
let infoMasVistas = ''

fetch("https://api.themoviedb.org/3/movie/popular?api_key=ba0b591fbb4dcbf21e7a279fceca5d5e")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    for(let i=0; i < 8; i++){
        infoMasVistas +=`
        <li>
        <img src= 'https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}' alt=''/>
        <p>Name: ${data.results[i].original_title}</p>
        </li>`
    }
    categoriesMasVistas.innerHTML= infoMasVistas
})
.catch(function(error){
    console.log("Error: " + error);
})

let categoriesMasValoradas=document.querySelector(".categories.masvaloradas");
    categoriesMasValoradas.style.display="flex";
    categoriesMasValoradas.style.flexWrap="wrap";
let infoMasValoradas = ''

fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=c71f5b75c8e3c6372967558c16ff597f")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    for(let i=0; i<8; i++){
        infoMasValoradas += `
        <li> <img src= 'https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}' alt='' />
        <p> Name: ${data.results[i].original_title}</p>
        </li>`
    }
    categoriesMasValoradas.innerHTML= infoMasValoradas
})
.catch(function(error){
    console.log("Error: " + error);
})



let categoriesSeriesMasValoradas=document.querySelector(".categories.seriesmasvaloradas")
categoriesSeriesMasValoradas.style.display="flex";
categoriesSeriesMasValoradas.style.flexWrap="wrap"

    let infoSMasValoradas = ''

fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=c71f5b75c8e3c6372967558c16ff597f")
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
        for(let i=0; i < 8; i++){
            infoSMasValoradas +=`
            <li>
            <img src= 'https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}' alt=''/>
            </li>`
        }
        categoriesSeriesMasValoradas.innerHTML= infoSMasValoradas
    })

    .catch(function(error){
        console.log("Error: " + error);
    })
    