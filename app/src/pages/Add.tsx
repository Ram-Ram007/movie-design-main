import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addMovie } from "../services/api";
import Layout from "../components/layout";

function Add() {
  const navigate = useNavigate();

  const [movieData, setMovieData] = useState({
    title: "",
    year: "",
  });

  async function movie() {
    try {
      const moviePayload = {
        title: movieData.title,
        year: parseInt(movieData.year),
      };
      const response = await addMovie(moviePayload);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log("Errored");
      console.log(error);
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMovieData({
      ...movieData,
      [name]: value,
    });
  };

  return (
    <>
      <Layout title="addform">
        <h1>Add</h1>
        <form>
          <label>Enter Movie Name</label>
          <input
            type="text"
            name="title"
            value={movieData.title}
            onChange={(e) => handleInputChange(e)}
          />
          <label>Enter Movie Year</label>
          <input
            type="number"
            name="year"
            value={movieData.year}
            onChange={(e) => handleInputChange(e)}
          />
        </form>

        <Link to="/">
          <button onClick={movie}>Submit</button>
        </Link>
      </Layout>
    </>
  );
}

export default Add;
