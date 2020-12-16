/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import "../styles/mains.scss"

const Layout = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false)
  localStorage.setItem("dark", darkTheme)

  useEffect(() => {
    localStorage.getItem("dark", darkTheme)
  }, [darkTheme])

  return (
    <div className={darkTheme ? "dark-theme" : "light-theme"}>
      <Navbar></Navbar>
      <label class="switch">
        <input type="checkbox" />
        <span
          onClick={() => {
            setDarkTheme(!darkTheme)
            localStorage.setItem("dark", darkTheme)
          }}
          class="slider round"
        ></span>
      </label>
      <main>{children}</main>
    </div>
  )
}
export default Layout
