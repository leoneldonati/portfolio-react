import { useEffect, useState } from "react";
import { getRepos } from "../services/getRepos";
import "../sass/styles/Projects.scss";
import { RepoCard } from "../components/RepoCard.jsx";
import { Loader } from '../components/Loader.jsx'

export const Projects = () => {
  //get repos from github
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    getRepos()?.then((data) => setRepos(data));
  }, []);

  //set view more repos
  const [length, setLength] = useState(4);
  const viewMore = () => {
    setLength(length + 2);
    if (length === repos.length) return setLength(4);
  };

  // loader
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section className="Projects">
      <button
        className="Projects-btn"
        onClick={() => {
          viewMore();
        }}
      >
        {length === repos.length ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="Btn-svg"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="Btn-svg"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
        )}
      </button>

      <div className="Container">
        {
        loading 
          ? 
        (
          <Loader />
        ) 
          : 
        (
          repos
            .map((repo) => <RepoCard repo={repo} key={repo.id} />)
            .slice(0, length)
        )
        }
      </div>

      <div className="Container-right">
        <h3 className="Container-right-h3">My projects on GitHub!</h3>
        <div className="Container-right-images">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="500"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </div>
      </div>
    </section>
  );
};
