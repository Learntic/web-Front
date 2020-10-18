import gql from 'graphql-tag'

// USER-MS
export const UPDATE_USER = gql`
                mutation updateUser($fullname: String, $username: String, $email: String){
                    updateUser( 
                        token: "ksalfksdlfj", 
                        id: "0x15f91", 
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