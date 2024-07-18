 var myHttp = new XMLHttpRequest()
 var list =[]
 myHttp.open("GET" , "http://api.themoviedb.org/3/trending/movie/day?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff")
 myHttp.send()

 //https://api.themoviedb.org/3/trending/movie/day?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff

 myHttp.addEventListener('readystatechange' , function(){
    
            list = JSON.parse(myHttp.response).results
            display()
        
 })

 function searchMovie(title){
    title = title.replace(":","")
    title = title.replace("\'","")

    title = title.replace(" ","+")
    var search = `https://asd.quest/find/?find=${title}`
    return search;
 }
 function display(){
    var cartona = ``;
    for(var i = 0 ; i < list.length ; i++){
        let s = searchMovie(list[i].title)
        cartona += `<div class="col-md-4">
                <div class="item">
                    <a href="${s}"><img class="w-100 mt-2 mb-2 rounded-2 border border-2 myBorder" src="https://image.tmdb.org/t/p/w500/${list[i].poster_path}"></a>
                    <h2><a href="${s}" class=" text-decoration-none text-white fst-italic">${list[i].title}</a></h2>
                    <p>${list[i].overview}</p>
                </div>
            </div>`;
    }
    document.getElementById("myData").innerHTML = cartona
 }
 display()