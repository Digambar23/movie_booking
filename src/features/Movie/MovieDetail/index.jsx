import { MovieHeader } from "../MovieHeader";
import styles from "./MovieDetail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar } from "../../shared/NavBar/NavBar";

export function MovieDetail() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:4000/api/movie/" + id)
      .then((res) => {
        return res.json();
      })
      .then((parsedResponse) => {
        setMovie(parsedResponse);
      });
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className={styles.detail}>
        <section className={styles.header}>
          <img className={styles.headerImg} src={movie.posterUrl} alt="" />
        </section>
        <section className={styles.movieHeader}>
          <MovieHeader movie={movie} />
        </section>
        <section className={styles.banner}>
          <a href={`${id}/ticketPlan`} className={styles.btnBookTickets}>
            Book Tickets
          </a>
        </section>
      </div>
    </div>
  );
}
