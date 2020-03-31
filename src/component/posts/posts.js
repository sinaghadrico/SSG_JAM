import React from 'react'

import { Link } from 'gatsby'

import { toPersian } from '../../utils/toPersian'

import './posts.css'

const Posts = ({ title, summary, time, slug }) => {

    const persianTime = toPersian(time)

    return (
        <div className='box'>
            <div className='card-title'>
                <Link to={slug} id='link'>
                    <h3> {title} </h3>
                </Link>

            </div>
            <div className='card-description'>
                <p> {summary} </p>
            </div>
            <div className='card-footer'>
                <span>خواندن {persianTime} دقیقه </span>
            </div>
        </div>
    )
}

export default Posts;