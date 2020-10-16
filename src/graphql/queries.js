import gql from "graphql-tag";


// USER-MS
export const GET_MY_FRIENDS = gql `
    query {
        myFriends(token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZjdjZjg3ODVjYjQwNTU2MTgyNjA2OWEiLCJpYXQiOjE2MDIwNDEyMTUsImV4cCI6MTYwMzI1MDgxNX0.XWyj5MVqmm3w3qi7YV9Q4AR7DU22iLwZUbzjap1MvmU", id: "0x11172") {
        fullname
        username
        age
        }
    }`


// AUTH-MS

export const SIGN_IN = gql `
query singIn($username: String!, $password: String!) {
  signIn(
    account: {
      username: $username
      password: $password
    })
    {
      username
      token
    }
  }`