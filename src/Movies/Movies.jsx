import React from 'react';
import Movie from '../Movie/Movie.jsx';
import './styles.css';
import movies from './movies';

class Movies extends React.Component {

  state = { ...movies };
  

  getMovie = movie => {
    return ( 
    <Movie name={movie.name} likes={movie.likes} banner={movie.banner} hero={movie.hero} />
    );
  };

  render() {
    return (
      <div className='movies-section'>
        {/* {this.getMovie(this.state.maharshi)}
        {this.getMovie(this.state.Avengers)}
        {this.getMovie(this.state.Jersey)}
        {this.getMovie(this.state.Jersey)} */}
        {
          Object.keys(this.state).map(x => {
           return this.getMovie(this.state[x])
          })
        }
      </div>
    );
  }
}

export default Movies;