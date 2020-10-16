import gql from "graphql-tag";

//auth-ms

export const SIGN_UP = gql `
mutation signUp($username: String!, $password: String!) {
    signUp(account: { 
        username: $username
        password: $password 
        }) {
      username
    }
  }
`;