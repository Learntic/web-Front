import gql from 'graphql-tag'

// USER-MS
export const UPDATE_USER = gql`
                mutation updateUser($fullname: String, $username: String, $email: String, $token: String!){
                    updateUser( 
                        token: $token, 
                        id: "0x2", 
                        user: {
                            fullname: $fullname
                            username: $username
                            email: $email

                    }) {
                        fullname
                        username
                        email
                    }
                }`

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
mutation createInscription($username: String!, $idCourse: Int!){
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
mutation deleteInscription($Id_inscription: Int){
  deleteInscription(id:$Id_inscription) {
    id
  }
}`

//Feedback-Ms

export const CREATE_FEEDBACK = gql `
mutation createFeedback($username: String!, $idCourse: Int!, $opinion: String!, $score: Int!, $userToken: String!){
  createFeedback(feedback: {
    id_usuario: $username,
    id_curso: $idCourse,
    opinion: $opinion,
    nota: $score,
  }, token: $userToken) {
    id
    id_usuario
    id_curso
    opinion
    nota
  }
}`

export const DELETE_FEEDBACK = gql `
mutation deleteFeedback($idFeedback: Int!){
  deleteFeedback(id: $idFeedback)
}`

//Achievements_MS

export const CREATE_ACHIEVEMENT = gql `
mutation createAchievement($achievementName: String!, $achievementDescription: String!){
  createAchievement(achievement2: {
    name : $achievementName, 
    description : $achievementDescription
  }){
  	name  
  } 
}`

export const CREATE_ACHIEVEMENT_USER = gql `
mutation createUserAchievements($username: String!, $shared: Boolean!, $idAchievements: String!){
  createUserAchievements(user_achievement2: 
    {
			username : $username,
      shared : $shared,
      achievements_id: $idAchievements})
  {
    username
    shared
  } 
}`;
