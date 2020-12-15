import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/index.scss"
import layoutStyle from "./layout.module.scss"
const Layout = props => {
  return (
    <div className={layoutStyle.container}>
      <div className={layoutStyle.content}>
        <Header />
        {props.children}
      </div>

      <Footer />
    </div>
  )
}

export default Layout
