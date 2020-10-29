import { mapGetters } from 'vuex';
import { COURSES_USER } from "../graphql/queries";

export const authComputed = {
    ...mapGetters(['loggedIn'])
};

export const getCurrentUser = function() {
  if (localStorage.getItem("user")) {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch (e) {
      localStorage.removeItem("user");
    }
  }

  return {}
}
export const isRegistered = async function(that, username, currentCourse) {
    let userCourses = []
    let clickable = false
    
    await that.$apollo
        .query({
          query: COURSES_USER,
          variables:{
            username: username,
          }
        })
        .then((res) => {
          userCourses = res.data.coursesByUserId.map((course) => {return course.course_id});
          clickable = userCourses.includes(parseInt(currentCourse))
        }).catch((err)=>{
          console.log(err);
        });
    return clickable
}