const input = document.getElementById("input");
const search = document.getElementById("searchButton");
const movieContainer = document.getElementById("moviecontainer");
search.addEventListener("click", async()=>{
      let movie = input.value;
       if(movie.trim() === ""){
            alert("please enter a movie name")
            
           }
           input.value = ""

      let response = await fetch(`https://www.omdbapi.com/?apikey=78e9ca1f&s=${movie}`);
      let data = await response.json();
      console.log(data.Response);
     if( data.Response==="False"){
      alert("movie not found");
      return;
     }
    
         console.log(data.Search);
         movieContainer.innerHTML ="";
         data.Search.forEach((movie) => {
           console.log(movie);
           
           console.log(movie.Title);
           console.log(movie.Year);
           const card = document.createElement("div");
             const h1 = document.createElement("h1");
             h1.textContent = movie.Title;
             const h2 = document.createElement("h2");
             h2.textContent = movie.Year;
             const img = document.createElement("img");
             img.src= movie.Poster;
             card.append(h1);
             card.append(h2);
             card.append(img);
             moviecontainer.append(card);

         })
})