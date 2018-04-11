import React from 'react';

export default ({ data }) => (
  <div>
    <h1>About {data.site.siteMetadata.author}</h1>
    <p>Big ol' nerd.</p>
  </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        author
      }
    }
  }
`;
