import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const RedirectComponent = () => {
  const { id } = useParams();
  const [redirectSuccess, setRedirectSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/${id}`);
        console.log(response.data);

        if (response.data && response.data.long_url) {
          console.log("Redirecting to:", response.data.long_url);
          window.location.href = response.data.long_url;
          setRedirectSuccess(true);
        } else {
          console.log("Long URL not found");
        }
      } catch (error) {
        console.log("Error occurred during axios get request from client-side ", error.message);
        setRedirectSuccess(false);
      }
    };
    fetchData();
  }, [id]);

  if (!redirectSuccess) {
    return <NotFound />;
  }

  return <h1>Wait...</h1>;
}

export default RedirectComponent;
