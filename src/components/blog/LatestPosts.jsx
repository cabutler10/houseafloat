import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlogPreview from "./BlogPreview"

export default function LatestPosts() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 3
        filter: { frontmatter: { label: { in: "article" } } }
      ) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
              tags
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
  `)

  return (
    <>
      {data &&
        data.allMdx.edges.map((elem, idx) => (
          <BlogPreview post={elem} idx={idx} key={`latestPost${idx}`} />
        ))}
    </>
  )
}
