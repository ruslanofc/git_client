import gql from "graphql-tag";

const REPOSITORY_QUERY = gql`
    query repos($title: String!) {
        search(query: $title, type: REPOSITORY, first: 12) {
            nodes {
                ... on Repository {
                    id,
                    name,
                    url,
                    viewerHasStarred,
                    
                    owner {
                        url
                        login
                        avatarUrl
                    }
                    primaryLanguage {
                        name
                    }
                }
            }
        }
    }
`;

export default REPOSITORY_QUERY;
