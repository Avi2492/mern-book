import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/button/BackButton";
import SpinnerLoader from "../components/spinner/SpinnerLoader";
function DeleteBooks() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    setIsLoading(true);
    console.log("Deleting book with id:", id);
    axios
      .delete(`https://mern-book-roan.vercel.app/book/${id}`)
      .then(() => {
        setIsLoading(false);
        alert("Deleted Successfully");
        navigate("/");
      })
      .catch((error) => {
        alert("Error Occurred" + error.message);
        setIsLoading(false);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {isLoading ? <SpinnerLoader /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are You Sure You want to delete this book?</h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDelete}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
}

export default DeleteBooks;
