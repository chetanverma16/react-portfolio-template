import React, { useState, useEffect } from "react";
import axios from "axios";

/* this component is imported in index.js/footer page to display the forks_counts: UI on footer section  */
/* your github token here accessToken = process.env.GIT_API_TOKEN */

/* or you can completly ignore and delete this component */
const accessToken = ".env token";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Token ${accessToken}`,
  },
});

const RepoForks = ({ repository }) => {
  const [forks, setForks] = useState(0);

  useEffect(() => {
    async function fetchForks() {
      try {
        const response = await api.get(`/repos/${repository}`);
        setForks(response.data.forks_count);
      } catch (error) {
        console.error(error);
      }
    }
    fetchForks();
  }, [repository]);

  return (
    <div>
      <a href="https" target="_blank" rel="noreferrer">
        <p>⊶⊸ Forks: {forks}</p>
      </a>
    </div>
  );
};

export default RepoForks;
