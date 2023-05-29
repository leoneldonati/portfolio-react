import { setColor, setColorCircle } from "../services/setColor";

export const RepoCard = ({ repo }) => (
  <div className="Repo">
    <div className="Repo-container--left">
      <h3 className="Repo-title">{repo.name}</h3>
      <p className="Repo-description">{repo.description}</p>
    </div>

    <div className="Repo-state">
      <ul className="Repo-info">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="Repo-svg"
            viewBox="0 0 16 16"
            style={{ fill: setColorCircle(repo.visibility) }}
          >
            <circle cx="8" cy="8" r="8" />
          </svg>
          {repo.visibility}
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className="Repo-svg"
            viewBox="0 0 16 16"
            style={{ fill: setColor(repo.language) }}
          >
            <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z" />
          </svg>
          {repo.language == "JavaScript" ? "JS" : repo.language}
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="Repo-svg"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          Forks: {repo.forks}
        </li>
      </ul>

      <div
        className="divisor"
        style={{ border: `1px solid ${setColor(repo.language)}` }}
      ></div>

      <ul className="Repo-links">
        <li>
          <a
            href={repo.html_url}
            className="Repo-a"
            rel="noreferrer noopener"
            target="_blank"
            title={repo.name}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="Repo-svg--link"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </li>
        <li>
          {
            repo.has_pages
            ?
            <a
            href={`https://leoneldonati.github.io/${repo.name}`}
            className="Repo-a"
            rel="noreferrer noopener"
            target="_blank"
            title={repo.name.toUpperCase()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="Repo-svg--link"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
              />
            </svg>
          </a>
          :
          ''
          }

        </li>
      </ul>
    </div>
  </div>
);
