let endpoint='https://api.themoviedb.org/3/search/multi'
let api_key='?api_key=c71f5b75c8e3c6372967558c16ff597f'
/*'keyword' es lo que busca el usuario (searchParams.*/

let movie=location.search
    console.log(location.search)/*nos trae la query string*/
let ObjMovie= new URLSearchParams(movie)
let keyword=ObjMovie.get('search')

let searchMovie=document.querySelector(".elemtosDeRespuestaM")
let textoInput=document.querySelector(".busquedaP1")

fetch(`${endpoint}${api_key}&query=${keyword}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    
        let movieListSearch=''

        
        for(let i=0;i<data.results.length;i++){
            movieListSearch+=`<li><p>${data.results[i].original_title}</p>
            <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"
            </li>`

            searchMovie.innerHTML=movieListSearch
        }        
        
    })
    .catch(function(error){
        console.log(error)
    })
