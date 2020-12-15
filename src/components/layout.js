/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from "react"
import Navbar from "./Navbar"
import "../styles/mains.scss"

const Layout = ({ children }) => {
  const darkTheme = localStorage.getItem("dark")
  // React.useEffect(() => {
  //   localStorage.getItem("dark")
  // }, [darkTheme])
  return (
    <div className={darkTheme === "true" ? "dark-theme" : "light-theme"}>
      <Navbar></Navbar>
      <main>{children}</main>
    </div>
  )
}
export default Layout
