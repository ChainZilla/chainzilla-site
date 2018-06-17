import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const TemplateWrapper = ({ children, data: { site: { siteMetadata: { title } } } }) => (
  <div>
    <Helmet title={title} />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;