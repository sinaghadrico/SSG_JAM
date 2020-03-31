import React from 'react'

import { graphql } from 'gatsby'

import SEO from '../component/seo/SEO'

import Navbar from '../component/navbar/navbar'
import Posts from '../component/posts/posts'

const IndexPage = (props) => {

  const allData = props.data.allFile.edges;

  return (
    <React.Fragment>
      <SEO />
      <Navbar />
      {
        allData.map(data => {
          const detail = data.node.childMarkdownRemark
          return (
            <Posts
              key={detail.id}
              title={detail.frontmatter.title}
              summary={detail.frontmatter.summary}
              time={detail.frontmatter.time}
              slug={detail.fields.slug}
            />
          )
        }
        )
      }
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "ssg-concept"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              summary
              time
          }
          id
          fields{
            slug
          }
        }
      }
    }
  }
}`

export default IndexPage;