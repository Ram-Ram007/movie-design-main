import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../services/api";

import "@picocss/pico";
import Layout from "../components/layout";

interface IMovie {
  id: number;
  title: string;
  year: number;
}

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    console.log("Called once");

    async function getMoviesFromAPI() {
      setIsLoading(true);
      try {
        const response = await getMovies();
        setMovies(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getMoviesFromAPI();
  }, [refresh]);

  async function deleteMovie(id: number) {
    try {
      console.log(`Deleting movie with ID: ${id}`);
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  }

  async function handleDeleteMovie(id: number) {
    try {
      await deleteMovie(id);
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  }

  return (
    <>
      <Layout title="home">
        <h1>Home</h1>
        <div className="container">
          <Link to="/add" role="button" className="secondary">
            +
          </Link>
          <button
            disabled={isLoading}
            onClick={() => setRefresh((prev) => !prev)}
          >
            refresh list
          </button>
          {isLoading ? (
            <p>Loading movies!</p>
          ) : (
            <div className="grid">
              {movies.map((m) => (
                <article key={m.id}>
                  <h1>{m.title}</h1>
                  <h1>{m.year}</h1>

                  <Link to={`/edit/${m.id}`} className="pico-link">
                    <button>Edit</button>
                  </Link>
                  <Link to="/" className="pico-link">
                    <button
                      onClick={() => handleDeleteMovie(m.id)}
                      className="pico-link"
                    >
                      Delete
                    </button>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}

export default Home;
