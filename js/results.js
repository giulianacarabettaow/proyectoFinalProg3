

let endpoint='https://api.themoviedb.org/3/search/multi'
let api_key='?api_key=c71f5b75c8e3c6372967558c16ff597f'
/*'keyword' es lo que busca el usuario (searchParams.*/

let movie=location.search
    console.log(location.search)/*nos trae la query string*/
let ObjMovie= new URLSearchParams(movie)
let keyword=ObjMovie.get('search')



fetch(`${endpoint}${api_key}&query=${keyword}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function(errpr){
        console.log(error)
    })
