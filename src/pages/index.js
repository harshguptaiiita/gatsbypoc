import { Link } from "gatsby"
import React from "react"
// import '../global.sass'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <React.Fragment>
      <SEO title="Home" />
      <div>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
      <Link to="/page-3/">Go to page 3</Link>
    </React.Fragment>
  </Layout>
)

export default IndexPage
