import React, {Component} from 'react'
import data from '../data'

class Slide extends Component {
    constructor(){
        super()
        this.state = {
            index: 0
        }
    }
    handlePrevious(){
        if(this.state.index > 0){
            this.setState({index: this.state.index - 1})
        }
    }
    handleNext(){
        if(this.state.index < data.length - 1)
        this.setState({index: this.state.index + 1})
    }
    render(){
        return(
            <div className="Slide">
                <div className="slide-number">
                    {data[this.state.index].id}/25
                </div>
                <div className="name">
                    {`${data[this.state.index].name.first} ${data[this.state.index].name.last}`}
                </div>
                <div className="hometown">
                    From: {`${data[this.state.index].city}, ${data[this.state.index].country}`}
                </div>
                <div className="employer">
                    Employer: {data[this.state.index].employer}
                </div>
                <div className="favoriteMovies">
                    Favorite Movies:
                    <ol>
                        <li>{data[this.state.index].favoriteMovies[0]}</li>
                        <li>{data[this.state.index].favoriteMovies[1]}</li>
                        <li>{data[this.state.index].favoriteMovies[2]}</li>
                    </ol>
                </div>
                <nav className="nav">
                    <button className="white-buttons" onClick={() => {this.handlePrevious()}}>&lt; Previous</button>
                    <div className="blue-buttons">
                        <button id="edit-button">Edit</button>
                        <button id="delete-button">Delete</button>
                        <button id="new-button">New</button>
                    </div>
                    <button className="white-buttons" onClick={() => {this.handleNext()}}>Next &gt;</button>
                </nav>
            </div>

        )
    }

}

export default Slide