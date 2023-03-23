import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./Repositorios.css";
import axios from "axios";
import Spinner from "../components/Spinner";

const Repositorios = () => {
  const navigate = useNavigate();
  let user = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reposData, setReposData] = useState([]);

  async function getRepos() {
    setIsLoading(true);
    try {
      let url = `https://api.github.com/users/${user.username}/repos`;
      let request = await axios(url);
      let response = await request.data;
      setReposData(response);
      setIsLoading(false);
    } catch (e) {
      setError(true);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div>
      <div className="bar"></div>
      <div className="back-button">
        <Link to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
      </div>
      <div className="title-container">
        <p>Repositorios</p>
      </div>

      {isLoading ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        <>
          {error ? (
            <div className="error-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
              <p>Usuario introducido no existe</p>
              <div className="button-back">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>
                <p onClick={() => navigate(-1)}>Volver</p>
              </div>
            </div>
          ) : (
            reposData.map((repos: any, i: number) => (
              <a key={i} href={repos.html_url}>
                <div className="repo-container">
                  <div className="date-container">
                    <p>{repos.created_at.split("T")[0]}</p>
                  </div>
                  <div className="repo-name-container">
                    <p>{repos.name}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                  <div className="language-container">
                    <p>{repos.language}</p>
                  </div>
                </div>
              </a>
            ))
          )}
        </>
      )}
    </div>
  );
};

export default Repositorios;
