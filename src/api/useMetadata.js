import { useStaticQuery, graphql } from "gatsby"

export const useMetadata = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }`)
    return data?.site?.siteMetadata
}