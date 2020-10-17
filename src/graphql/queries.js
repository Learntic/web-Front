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
export const AUTH = gql `
query auth($token: String!){
  auth(
    token: {
    token: $token
  })
}
`

//Cursos-Ms
export const ALL_COURSES = gql `
query{
  allCourses{
    course_id
    course_description
    course_name
  }
}`

export const COURSE_SEARCH = gql `
query searchCourse($cadena: String!){
  searchCourse(
    curso:{
      cadena: $cadena
    })
    {
      course_id
      course_description
      course_name
    }
}`

export const COURSE_TOPICS = gql `
query courseTopics($entero: Number!) {
  courseTopics(idCurso:{entero: $entero}){
    topic_id
    topic_description
    topic_name
  }
}`

export const COURSES_USER = gql `
query inscriptionByUserId($username: String!){
  inscriptionByUserId(id: $username){
    id_usuario
    id
    id_curso
    max_activity
  }
}`

//Feedback-Ms

export const FEEDBACKS_COURSE = gql `
query feedbackByCourse($idCurso: Number!){
  feedbackByCourse(id_curso: $idCurso) {
    id
    id_usuario
    id_curso
    opinion
    nota
  }
}`

export const SCORE_COURSE = gql `
query ($idCurso: Number!){
  feedbackScore(id_curso: $idCurso)
}`

//Achievements_MS

export const ACHIEVEMENTS_BY_USERNAMES = gql `
query GetAchievementsByUsernames($username: String!){
  GetAchievementsByUsernames(names :[$username]){
    username
    achievements {
      description
    } 
  } 
}`