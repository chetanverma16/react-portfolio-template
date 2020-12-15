import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar = () => {
  const [darkTheme, setDarkTheme] = React.useState(false)
  // localStorage.setItem("dark", JSON.stringify(darkTheme))
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkTheme))
  }, [darkTheme])
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Portfolio.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Work</button>
            <button onClick={() => scrollTo("#about")}>About</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
            <label class="switch">
              <input type="checkbox" />
              <span
                onClick={() => {
                  setDarkTheme(!darkTheme)
                  localStorage.setItem("dark", JSON.stringify(darkTheme))
                }}
                class="slider"
              ></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
