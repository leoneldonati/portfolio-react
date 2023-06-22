import { useEffect, useState } from "react";
import { getRepos } from "../services/getRepos";
import "../sass/styles/Projects.scss";
import { RepoCard } from "../components/RepoCard.jsx";
import { Loader } from "../components/Loader.jsx";

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
      <div className="Container">
        {loading ? (
          <Loader />
        ) : (
          repos
            .map((repo) => <RepoCard repo={repo} key={repo.id} />)
            .slice(0, length)
        )}
      </div>
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
    </section>
  );
};
