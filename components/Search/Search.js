import { useState, useEffect } from "react";
import Fuse from "fuse.js";
import skillsData from "/components/Search/skillsData.json";
import styles from "/components/Search/Search.module.css";

/* the most exciting component in the portfolio,
look up skills anything within site */
const options = {
  keys: ["name"],
};

const fuse = new Fuse(skillsData, options);

const SearchMe = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [resultsVisible, setResultsVisible] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const placeholders = [
    "Search About",
    "Search education or bootcamps",
    'Search skills "Target skills" ',
    'Search tech stacks "Target techStacks"',
    "Search projects",
    'Search "Professional feedbacks"',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [placeholders]);

  useEffect(() => {
    if (query === "") {
      setSearchResults([]);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        const results = fuse.search(query);
        setSearchResults(results);
        setIsLoading(false);
      }, 1500);
    }
  }, [query]);

  const handleBlur = () => {
    setTimeout(() => {
      setResultsVisible(false);
    }, 200);
  };

  return (
    <div className={styles.container}>
      <input
        className={`${styles.input} focus:ring-purple-600  placeholder-transition`}
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onFocus={() => setResultsVisible(true)}
        onBlur={handleBlur}
        placeholder={placeholders[placeholderIndex]}
      />

      {isLoading ? (
        <div className={styles.loading}>
          <p>Loading...</p>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      ) : (
        <div
          className={styles.results}
          style={{ display: resultsVisible ? "block" : "none" }}
        >
          <div className="search-tips-div">
            <h3 className={styles.searchTipsH3}>What are you looking for?</h3>
            <p className={styles.searchTipsP}>🌟Try typing these keywords</p>
            <ul className={styles.searchTipsContainer}>
              <li className={styles.searchTipsItems}> 👤About</li>
              <li className={styles.searchTipsItems}> 🎆NODE</li>
              <li className={styles.searchTipsItems}> 🎴Html</li>
              <li className={styles.searchTipsItems}> 📚Education bootcamps</li>
              <li className={styles.searchTipsItems}> 💻Skills </li>
              <li className={styles.searchTipsItems}> 🛠️Technologies </li>
              <li className={styles.searchTipsItems}> 🚧Projects</li>
              <li className={styles.searchTipsItems}> 🌩️Salesforce projects</li>
              <li className={styles.searchTipsItems}> 😊Soft skills</li>

              <li className={styles.searchTipsItems}> 🧰Techstacks</li>
              <li className={styles.searchTipsItems}>
                {" "}
                ❤️Professional feedbacks
              </li>
            </ul>
          </div>

          {searchResults.map((result) => (
            <div key={result.item.id}>
              <h2 className={styles.skillName}>
                <img
                  className={styles.skillIcon}
                  src={result.item.icon}
                  alt={result.item.name}
                />
                {result.item.name}
              </h2>

              <div className={styles.relatedProjects}>Related Topics</div>
              <div className={styles.projects}>
                {result.item.relatedProjects.map((project) => (
                  <a
                    className={styles.relatedProjectsHover}
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div key={project.id} className={styles.project}>
                      <div
                        className={styles.projectImg}
                        style={{ backgroundImage: `url(${project.image})` }}
                      ></div>
                      <h3 className={styles.projectName}>{project.name}</h3>
                      <p className={styles.projectDesc}>
                        {project.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchMe;
