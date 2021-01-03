import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Blog from "../components/blog/Blog"

const Tags = ({ pageContext, data }) => {
  const { tag, currentPage, numPages } = pageContext
  const { edges } = data.allMdx

  return (
    <Layout>
      <SEO />
      <Blog
        posts={edges}
        tag={tag}
        currentPage={currentPage}
        numPages={numPages}
      />
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query TagQuery($tag: String, $skip: Int!, $limit: Int!) {
    allMdx(
      limit: $limit
      skip: $skip
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            description
            tags
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            featuredImageSmall {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
