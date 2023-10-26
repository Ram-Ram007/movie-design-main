import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/layout";

function Edit() {
  const { id } = useParams();

  useEffect(() => {
    console.log("Getting info of ", id);
  }, [id]);

  return (
    <>
      
        <h1>Edit Form</h1>
        <form>
          <label>Enter Alter Name</label>
          <input type="text"></input>
          <label>Enter Alter Year</label>
          <input type="text"></input>
        </form>

        <Link to="/">
          <button>save </button>
        </Link>
      
    </>
  );
}

export default Edit;
