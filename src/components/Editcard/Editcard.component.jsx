import React, { Component } from 'react'

import './editcard.styles.css'

class EditCard extends Component{
    constructor(props){
        super(props)

        this.state={
            id: this.props.cardData.id,
            name:{
                first: this.props.cardData.name.first,
                last: this.props.cardData.name.last
            },
            city:this.props.cardData.city,
            country: this.props.cardData.country,
            employer: this.props.cardData.employer,
            title: this.props.cardData.title,
            favoriteMovies: this.props.cardData.favoriteMovies
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        // console.log(e.target)
        e.persist()
        this.setState(prevState =>({
            name:{
                ...prevState.name,
                [e.target.name]: e.target.value
            },
            [e.target.name]: e.target.value
        }))
        this.props.updateCardItem(this.state)
    }
    
    render(){

        // let name = `${this.props.cardData.name.first} ${this.props.cardData.name.last}`
        let movieList = this.state.favoriteMovies.map((movie, i)=>{
            return (
                <li key={i}><input value={movie} type="text" onChange={this.handleChange}/></li>
            )
        })
        // console.log(this.state)
        return(
            <div className="card-container">
                <div className="card-number">
                    <h3>{this.props.index +1}/{this.props.total}</h3>
                </div>
                <div className="card-title">
                    <input name='first' value={this.state.name.first} type="text" onChange={this.handleChange}/>
                    <input name='last' value={this.state.name.last} type="text" onChange={this.handleChange}/>
                </div>
                <div className="card-detail">
                    <div className="basic-info">
                        <h4>Country: <input name="country" value={this.state.country}  type="text" onChange={this.handleChange}/></h4>
                        <h4>City: <input name="city" value={this.state.city} type="text" onChange={this.handleChange}/> </h4>
                        <h4>Title: <input name='title' value={this.state.title} onChange={this.handleChange}/> </h4>
                        <h4>Employer: <input name='employer' value={this.state.employer} onChange={this.handleChange}/> </h4>
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
}

export default EditCard