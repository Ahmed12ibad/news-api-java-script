let search = () => {
// window.onkeydown = () => {
// console.log(event.keyCode)
    // if(event.keyCode === 13){
// console.log("shaya/z
let news = document.getElementById('news')
fetch(
   
    `
https://newsapi.org/v2/everything?q=${news.value}&apiKey=89a0dd4e948a49d49de178c9fe1c6850
    `
)
.then( (res) => res.json())


.then( (res) => {
    console.log(res)


    let ahmed = `
    <h3 id="turtle"></h3>
    <img id="ing" src="" >
    <p id="discription"></p>
    <h3 id="date"></h3>
    
    `
    var  news_div = document.getElementById("news-card")
    news_div.innerHTML +=ahmed

    var title = document.getElementById("turtle")
    title.innerHTML = `${res.articles[0].title}`

    let imge = document.getElementById("ing")

    imge.src = `${res.articles[0].urlToImage}`
    imge.style.width="80%"
    imge.style.marginLeft='50px'

    const discription = document.getElementById("discription")
    discription.innerHTML = `${res.articles[0].description}`

    const date = document.getElementById("date")

    var datee = `${res.articles[0].publishedAt}`.toString()
   
   let copy =  datee.slice(0,10)
    date.innerHTML = 'news date'+'<br>'+`${copy}`











}
)
.catch( (error) => {
    console.log(error)
}

)
}
// }

// }