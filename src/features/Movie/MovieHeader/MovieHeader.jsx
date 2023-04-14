import styles from "./MovieHeader.module.css"

export function MovieHeader({movie}){
    return(
        <div>
            <section className={styles.header}>
                <div>
                    <h3 className={styles.title}>{movie.name}</h3>
                    <p className={styles.languages}>
                        {
                            movie.languages && movie.languages.map(l=>
                                <span>{l}&nbsp;&nbsp;</span>)
                        }
                    </p>
                </div>
            </section>
        </div>
    )
}