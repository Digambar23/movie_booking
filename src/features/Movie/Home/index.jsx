import { useEffect,useState } from "react";
// import { Banner } from "../Banner/Banner.Module";
// import { MovieCard } from "../MovieCard/MovieCard";
import { SearchPanel } from "../SearchPanel";
import {Link} from "react-router-dom";
import styles from "./Home.module.css";
import { Navbar } from "../../shared/NavBar/NavBar";
import { getMovies } from "../services";


export function Home(){
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        getMovies()
        .then(movies=>{
            setMovies(movies);
        })
    },[])
    return(
        <div>
            <Navbar/>
            <div className={styles.homeContainer}>
                <div className={styles.banner}>
                    {/* <Banner/> */}
                </div>
                <SearchPanel/>
                <div className="row">{
                    movies.map (m=>
                    <div key={m._id} className="col-md-3">
                        <Link to={`movie/${m._id}`}>
                            {/* <MovieCard key={m._id} movie={m}/> */}
                             </Link> 
                             </div>
                             )
                            
                }

                </div>
            </div>
        </div>
    );
}