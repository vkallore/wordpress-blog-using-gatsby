import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import contentParser from "gatsby-wpgraphql-inline-images"

import Layout from "../layouts"
import SEO from "../components/seo"
import { stripHtml, wordPressUrl, wordPressContentUrl } from "../helpers"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    const content = post.content
    console.log(wordPressUrl)
    console.log(wordPressContentUrl)
    // @TODO: STEP #5: Use title and content in Gatsby.
    return (
      <Layout>
        <SEO title={post.title} description={stripHtml(post.excerpt)} />
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div>
          {contentParser({ content }, { wordPressUrl, wordPressContentUrl })}
        </div>
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

// @TODO: STEP #4: Get current WP Post data via ID.
export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      excerpt
    }
  }
`
