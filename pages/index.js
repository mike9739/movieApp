import Head from 'next/head'
import React, {useEffect, useState} from "react";
import NavBar from "../components/navbar";
import SideMenu from "../components/sideMenu"
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import Footer from "../components/footer";
import {getCategories, getMovies} from "../actions";

export default function Home(props) {
    const {images} = props;
  return (
      <div>
        <NavBar/>
        <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu categories={props.categories} />
            </div>
            <div className="col-lg-9">
              <Carousel images={images}/>
              <div className="row">
              <MovieList movies={props.movies || []}/>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  )
}
Home.getInitialProps = async () =>{
    const movies = await getMovies();
    const categories = await getCategories();
    const images = movies.map(movie => {
       return {
           id : `image-${movie.id}`,
           url : movie.cover,
           title: movie.name,
       }
    });

    return {movies,images,categories}
}

//  class Home extends React.Component {
//
//      static async getInitialProps() {
//          const movies = await getMovies();
//          console.log(movies)
//          return {
//              movies
//          }
//
//      }
//
//      // constructor(props) {
//      //     super(props);
//      //     this.state = {
//      //
//      //         errorMessage:''
//      //
//      //     }
//      // }
//      // componentDidMount() {
//      //     getMovies().then((movies)=>{
//      //         this.setState({movies})
//      //     })
//      //         .catch((error)=> this.setState({errorMessage:error}));
//      // }
//
//      render() {
//          const {movies} = this.props
//         return (
//             <div>
//                 <Head>
//                     <title>Home</title>
//                     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
//                     <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"/>
//                     <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"/>
//                     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"/>
//                 </Head>
//                 <NavBar/>
//                 <div className="home-page">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-3">
//                                 <SideMenu />
//                             </div>
//                             <div className="col-lg-9">
//                                 <Carousel/>
//                                 <div className="row">
//                                     <MovieList movies={movies}/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <Footer/>
//                 <style jsx>{
//                     `
//          .home-page {
//             padding-top : 80px;
//          }
//          `}
//                 </style>
//             </div>
//         )
//     }
//
// }
// export default Home
