import React, { useEffect, useState } from 'react'
import Card from './Card'
import '../CSS/NewsApp.css'

const NewsApp = () => {
    const [search, setSearch] = useState("india");  
    const [newsData, setNewsData] = useState(null);
    const API_KEY = "a699dfd7bdfb465a925948b6fc4bbfe2";
    const getData = async()=>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles);
    }
    useEffect(()=>{
        getData();
    })
    const handleInput = (e)=>{
        console.log(e.target.value);
        setSearch(e.target.value);
    }
    const userInput = (e)=>{
        setSearch(e.target.value);
    }
  return (
    <div>
        <nav>
            <div>
                <h1 style={{userSelect: "none"}}>Your News</h1>
            </div>
            <ul style={{userSelect: "none"}}>
                <li>All News</li>
                <li style={{color: "red"}}>Trending</li>
            </ul>
            <div className='searchBar'>
                <input type="text" placeholder='Search News' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <p className='quote-para'>Stay updated with trending news...</p>
        <div className='category-button'>
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="politics">Politics</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>
        </div>
        <div>
            {newsData ? <Card newsData={newsData}/> : null}
        </div>
    </div>
  )
}

export default NewsApp