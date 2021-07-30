import React,, {useState, useEffect} from "react"
import Card from "../Home/Card"
import api from "../../services/api"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"

export const Home = () => {
  const [data, setData] = useState([]);
  
    useEffect(() => {
        api
          .get("/244")
          .then((res) => {
            console.log("SIGUE FUNCIONANDO", res);
            setData(res.data);
            //console.log("esto es data", data);
          })
          .catch((err) => {
            console.log("CAIGO EN ERROR", err);
          });
      }, []);
    
      return (
        <div>
          <span> SUPERHEROES </span>
          <Card />
        </div>
      );
    };