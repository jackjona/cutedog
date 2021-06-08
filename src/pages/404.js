import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <center>
    <div>
    <br></br>
    <b><p>Umm...</p></b>
    <h1>404 NOT FOUND</h1>
    <p>Whoops... It seems like your lost. Here is your special cute dog picture to make you happy ":)"</p>
    <br></br>
    <h4><a href="/"> Return Home</a></h4>
    <br></br>
    <space></space>
    <img src="https://res.cloudinary.com/jackj/image/upload/v1619977131/404dogimage.jpg" alt="404 Dog"></img>
    </div>
    </center>
  </Layout>
)

export default NotFoundPage
