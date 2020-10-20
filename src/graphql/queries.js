import gql from 'graphql-tag'

// USER-MS
export const GET_USER = gql `
query getUser($token: String!, $uid: String!) {
    getUser(
        id: $uid,
        token: $token
    ){
      fullname
      username
      email
      age
      error
    }
}`

// AUTH-MS

export const SIGN_IN = gql `
query signIn($username: String!, $password: String!) {
  signIn(
    account: {
      username: $username
      password: $password
    })
    {
      username
      token
      uid
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
    course_score
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
query courseTopics($idCourse: Int!) {
  courseTopics(idCurso: {entero: $idCourse}){
    topic_id
    topic_description
    topic_name
    }
  }`

export const COURSES_USER = gql `
query inscriptionByUserId($username: String!){
  inscriptionByUserId(id: $username)
}`

//Feedback-Ms

export const FEEDBACKS_COURSE = gql `
query feedbackByCourse($idCourse: Int!){
  feedbackByCourse(id_curso: $idCourse) {
    id
    id_usuario
    id_curso
    opinion
    nota
  }
}`

export const SCORE_COURSE = gql `
query ($idCourse: Int!){
  feedbackScore(id_curso: $idCourse)
}`

//Achievements_MS

export const ACHIEVEMENTS_BY_USERNAMES = gql `
query GetAchievementsByUsernames($username: String!){
  GetAchievementsByUsernames(names :[$username]){
    username
    achievements {
        name
        description
    } 
  } 
}`