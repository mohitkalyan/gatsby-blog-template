import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  const dataRender = data.allMarkdownRemark.nodes.map(node => {
    return (
      <div>
        <li>
          <Link to={`/blog/${node.fields.slug}`}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
          </Link>
        </li>
      </div>
    )
  })
  return (
    <div>
      <Layout>
        <h1>Blogs</h1>
        <ol>{dataRender}</ol>
      </Layout>
    </div>
  )
}

export default Blog
