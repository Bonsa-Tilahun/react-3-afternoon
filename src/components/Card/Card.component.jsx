import React from 'react'
import './card.styles.css'
const Card = (props) =>{
    console.log(props.cardData.movieList)
    let name = `${props.cardData.name.first} ${props.cardData.name.last}`
    let movieList = props.cardData.favoriteMovies.map((movie, i)=>{
        return (
            <li key={i}>{movie}</li>
        )
    })
    return(
        <div className="card-container">
            <div className="card-number">
                <h3>{props.index +1}/{props.total}</h3>
            </div>
            <div className="card-title">
                <h3>{name}</h3>
            </div>
            <div className="card-detail">
                <div className="basic-info">
                    <h4>From: <span>{`${props.cardData.country} ${props.cardData.city}`}</span> </h4>
                    <h4>Job Title: <span>{`${props.cardData.title}`}</span> </h4>
                    <h4>Employer: <span>{`${props.cardData.employer}`}</span> </h4>
                </div>
                <div className="movie-list">
                    <h4>Favorite Movies:</h4>
                        <ol>
                            {movieList}
                        </ol>
                </div>
            </div>
        </div>
    )
}

export default Card