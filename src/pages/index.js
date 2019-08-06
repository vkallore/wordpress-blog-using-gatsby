import React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => {
  const { nodes } = props.data.allWordpressPost
  const blogPosts = nodes.map(post => (
    <div key={post.id}>
      <Link to={post.slug}>
        <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
      </Link>
      <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
    </div>
  ))
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to my new Wordpress blog built using Gatsby!</p>
      <div>{blogPosts}</div>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

// @TODO: STEP #4: Get current WP Post data via ID.
export const postsQuery = graphql`
  query PostsQuery {
    allWordpressPost {
      nodes {
        author
        date(formatString: "")
        slug
        title
        excerpt
      }
    }
  }
`
