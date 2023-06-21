import { setColor, setColorCircle } from "../services/setColor";
import { ChromeSvg } from "../styled-components/chrome-svg.jsx";
import { GithubSvg} from '../styled-components/github-svg.jsx'

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
            <GithubSvg />
          </a>
        </li>
        <li>
          {repo.has_pages ? (
            <a
              href={`https://leoneldonati.github.io/${repo.name}`}
              className="Repo-a"
              rel="noreferrer noopener"
              target="_blank"
              title={repo.name.toUpperCase()}
            >
              <ChromeSvg />
            </a>
          ) : (
            ""
          )}
        </li>
      </ul>
    </div>
  </div>
);
