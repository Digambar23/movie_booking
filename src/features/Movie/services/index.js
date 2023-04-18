export const getMovies = async () => {
    const res = await fetch("http://localhost:4000/api/movie");
    return res.json();
}