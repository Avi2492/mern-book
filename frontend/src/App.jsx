import React, { useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import ShowBooks from "./pages/ShowBooks";
import EditBooks from "./pages/EditBooks";
import DeleteBooks from "./pages/DeleteBooks";
function App() {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/book")
  //     .then((response) => console.log(response));
  // }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/create" element={<CreateBooks />} />
        <Route path="/book/details/:id" element={<ShowBooks />} />
        <Route path="/book/edit/:id" element={<EditBooks />} />
        <Route path="/book/delete/:id" element={<DeleteBooks />} />
      </Routes>
    </>
  );
}

export default App;
