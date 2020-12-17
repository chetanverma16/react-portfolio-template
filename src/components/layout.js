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
  typeof window !== "undefined" &&
    window.localStorage.setItem("dark", darkTheme)

  useEffect(() => {
    window.localStorage.getItem("dark", darkTheme)
  }, [darkTheme])

  document.addEventListener("mousemove", parallaxEffect)
  function parallaxEffect(e) {
    this.querySelectorAll(".layer").forEach(layer => {
      const speed = layer.getAttribute("data-speed")

      const x = (window.innerWidth - e.pageX * speed) / 100
      const y = (window.innerHeight - e.pageY * speed) / 100

      layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
  }

  return (
    <div className={darkTheme ? "dark-theme" : "light-theme"}>
      <Navbar></Navbar>
      <label class="switch">
        <input type="checkbox" />
        <span
          onClick={() => {
            setDarkTheme(!darkTheme)
            window.localStorage.setItem("dark", darkTheme)
          }}
          class="slider round"
        ></span>
      </label>
      <i
        data-speed="-5"
        className="fa fa-github layer parallaxImage Icon-1"
      ></i>
      <i data-speed="2" className="fa fa-medium layer parallaxImage Icon-2"></i>
      <i
        data-speed="-2"
        className="fa fa-stack-overflow layer parallaxImage Icon-3"
      ></i>
      <i data-speed="7" className="fa fa-linux layer parallaxImage Icon-4"></i>
      <i data-speed="5" className="fa fa-drupal layer parallaxImage Icon-5"></i>
      <main>{children}</main>
    </div>
  )
}
export default Layout
