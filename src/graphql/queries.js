import gql from 'graphql-tag'

// USER-MS
export const GET_USER = gql`
                query {
                    getUser(token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZjdjZjg3ODVjYjQwNTU2MTgyNjA2OWEiLCJpYXQiOjE2MDIwNDEyMTUsImV4cCI6MTYwMzI1MDgxNX0.XWyj5MVqmm3w3qi7YV9Q4AR7DU22iLwZUbzjap1MvmU", id: "0x15f91") {
                        fullname
                        username
                        email
                        age
                        error
                    }
                }`