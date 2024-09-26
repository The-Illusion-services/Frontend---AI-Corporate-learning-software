import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { CreateContext } from "../Context/Context";
import Spinner from "../UiElements/spinner";
import { Link } from "react-router-dom";

const Landingpage = () => {
  const getQuotes = async () => {
    const response = await fetch("http://localhost:5000/api/quotes");
    const data = await response.json();
    return data;
    // setFacts(data)
  };
  // const [facts, setFacts] = useState([])
  const queryKey = "facts";
  const {
    data: facts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["facts"],
    queryFn: getQuotes,
    staleTime: 60 * 1000 * 5, // Data will never become stale
    // refetchOnMount: false
  });

  // useEffect(()=>{
  //   getQuotes()
  // }, [])

  if (isLoading) return <Spinner/>
  return (
    <>
      <Link to="/auth/login">
        <span>Login</span>
      </Link>
      <div>
        {facts?.map((data) => {
          return <p>{data.q}</p>;
        })}
      </div>
    </>
  );
  // return <div>Landingpage</div>;
};

export default Landingpage;
