let queryG=location.search;
console.log(location.search)
let ObjQueryG=new URLSearchParams(queryG);
let id=ObjQueryG.get('id');
console.log(id)


let endpoint="https://api.themoviedb.org/3/discover/movie";
let api_key="?api_key=c71f5b75c8e3c6372967558c16ff597f";
let keyword=id


let detailGenresList=document.querySelector(".favoritelist");
    detailGenresList.style.display="flex";
    detailGenresList.style.flexWrap="wrap";


fetch(`${endpoint}${api_key}&with_genres=${keyword}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)

        for(let i=0;i<data.results.length;i++){
            
           

            detailGenresList.innerHTML+=`
                        <ul>
                       
                            <li>
                            <a href="./detail-movie.html?id=${data.results[i].id}">
                            <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
                            </a>
                            <p>${data.results[i].original_title} </p>
                            <li>
                            
                            
                        </ul>
                        `
        }
    })

    .catch(function(error){
        console.log("Error: " + error);
    })


