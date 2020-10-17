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
  }`;

//Cursos-ms

export const COURSE_INSCRIPTION = gql `
mutation createInscription($username: String!, idCourse: Number!){
  createInscription(inscription:{
    id_usuario: $username
    id_curso: $idCourse
    max_activity: 0
  }) {
    id
    id_usuario
    id_curso
    max_activity
  }
}`

export const COURSE_UNINSCRIPTION = gql `
mutation deleteInscription($Id_inscription: Number){
  deleteInscription(id:$Id_inscription) {
    id
  }
}`

//Feedback-Ms

export const CREATE_FEEDBACK = gql `
mutation createFeedback($username: String!, idCourse: Number!, opinion: String!, score: Number!, userToken: String!){
  createFeedback(feedback: {
    id_usuario: $username
    id_curso: $idCourse
    opinion: $opinion
    nota: $score
  }, token: $userToken) {
    id
    id_usuario
    id_curso
    opinion
    nota
  }
}`

export const DELETE_FEEDBACK = gql `
mutation deleteFeedback($idFeedback: Number!){
  deleteFeedback(id: $idFeedback)
}`