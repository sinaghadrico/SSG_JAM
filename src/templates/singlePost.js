import React from 'react'

import { graphql } from 'gatsby'

import Navbar from '../component/navbar/navbar'
import SEO from '../component/seo/SEO'

import './singlePost.css'

const SinglePost = (props) => {

    const data = props.data.markdownRemark.frontmatter

    return (
        <React.Fragment>
            <SEO />
            <Navbar />
            <div className='article'>
                <div className='article-image'>
                    <img src={`../${data.image}`} alt={data.title} />
                </div>
                <div className='article-title'>
                    <h3>{data.title}</h3>
                </div>
                <div className='article-intro'>
                    <p>{data.intro}</p>
                </div>
            </div>
        </React.Fragment>

    )

}

export const query = graphql`
    query ($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            frontmatter {
                title
                intro
                image
    }
  }
}
`

export default SinglePost;