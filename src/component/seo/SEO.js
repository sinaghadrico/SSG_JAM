import React from 'react'

import favicon from '../../../static/favicon.ico'
import { Helmet } from 'react-helmet'

const SEO = () => (
    <React.Fragment>
        <Helmet>
            <meta charSet='uft8' />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>FrontCamp</title>
            <link rel='icon' href={favicon} />
        </Helmet>
    </React.Fragment>
)

export default SEO;