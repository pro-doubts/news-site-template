import React from 'react'
import '../CSS/Card.css'

const Card = (props) => {
    console.log(props.newsData)
    const data = props.newsData;
  return (
    <div className='cardContainer'>
        {data.map((currentItem, index)=>{
            if(!currentItem.urlToImage){
                return null;
            }else{
                return(
                    <div className='card' key={index}>
                        <img src={currentItem.urlToImage} alt=''/>
                        <div className='content'>
                            <p onClick={()=>window.open(currentItem.url)} className='title'>{currentItem.title}</p>
                            <p>{currentItem.description}</p>
                            <button onClick={()=>window.open(currentItem.url)}>Read More</button>
                        </div>
                    </div>
                )
            }
        })}
    </div>
  )
}

export default Card