import { useState, useEffect } from "react";

/* for styles go to GithubContributors/GithubContributors.css */
/* Using github api to fetch repository contributions */

const GithubContributors = ({ owner, repo }) => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const fetchContributors = async () => {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contributors?per_page=10`
      );
      const data = await response.json();

      // Fetch profile photos for each contributor
      const contributorsWithPhotos = await Promise.all(
        data.map(async (contributor) => {
          const userResponse = await fetch(
            `https://api.github.com/users/${contributor.login}`
          );
          const userData = await userResponse.json();
          return {
            id: contributor.id,
            login: contributor.login,
            avatarUrl: userData.avatar_url,
          };
        })
      );

      setContributors(contributorsWithPhotos);
    };

    fetchContributors();
  }, [owner, repo]);

  return (
    <div className="github-contributors">
      <h2>Top 10 Contributors</h2>
      <ul className="contributors-list">
        {contributors.map((contributor) => (
          <li key={contributor.id} className="contributor-card">
            <img
              src={contributor.avatarUrl}
              alt={contributor.login}
              className="contributor-photo"
            />
            <div className="contributor-info">
              <span className="contributor-username">{contributor.login}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubContributors;
