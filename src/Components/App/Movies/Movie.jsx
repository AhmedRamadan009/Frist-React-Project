import axios from 'axios'
import React, { Component } from 'react'

export default class Movie extends Component {
state={
movies:[],

};
 getmovies=async()=>{
    let {data} =await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=eea7ccb6fb8a0aa5f2e6df45ed9a955d');
    this.setState({movies:data.results})
 }
 componentDidMount(){
    this.getmovies();
 }
 
  render() {
   
    return (
      <>
      <section className=' text-center bg-light text-white'>
      <div className="container mt-5">
        <div className="row g-5  ">
            {this.state.movies.map((movie)=>
            <div key={movie.id} className="col-md-3  ">
              <div className="movies shadow-lg p-3 mb-2 bg-dark rounded">
            <div className="movie  ">
     <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="w-100 rounded" />
      
            </div>
            <div className="content text-light p-2">
              <h6>{movie.title}</h6>
              <p>{movie.release_date}</p>
             
            </div>
        </div>
        </div>
           )}
            
        </div>
      </div>
    
      </section>
      </>
    )
  }
}
