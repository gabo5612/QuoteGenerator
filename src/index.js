const text=document.querySelector('#text')
const author=document.querySelector('#author')
const tweet=document.querySelector('#tweet-quote');

const newQuote=document.querySelector('#new-quote')

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'edde126321mshdc33e57af3a5acep184648jsnb7049ba22cd5',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
} 
  
    fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', options)
    .then(response => response.json())
    .then(data => {
        const quote = data.content;
        const authorData= data.originator.name 
        text.innerHTML=quote;
        author.innerHTML=authorData;
        const elTweet=text.innerText
        tweet.href=`https://twitter.com/intent/tweet?text=${elTweet}`
    })
    .catch(err => console.error(err));

 
newQuote.addEventListener('click',() =>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'edde126321mshdc33e57af3a5acep184648jsnb7049ba22cd5',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    } 
      
        fetch('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', options)
        .then(response => response.json())
        .then(data => {
            const quote = data.content;
            const authorData= data.originator.name 
            text.innerHTML=quote;
            console.log(text);
            author.innerHTML=authorData;
            const elTweet=text.innerText
            tweet.href=`https://twitter.com/intent/tweet?text=${elTweet}`
        })
        .catch(err => console.error(err));
})