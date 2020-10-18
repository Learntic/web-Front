
<template>
	<div >
	<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
		<h1 class="title" >Logros</h1>
		<div class="table-responsive text-nowrap"> 
		<table class="table">
  		<thead>
   	 		<tr>
    	  	<th scope="col">Name</th>
      		<th scope="col">Description</th>
    		</tr>
  		</thead>
  		<tbody>
 	 			<tr v-for="logro in userAchievements" v-bind:key="logro">
    			<td class="title" >{{ logro.name }}</td>
    			<td class="title" >{{ logro.description }}</td>
  			</tr>		
  		</tbody>
		</table>
		</div>
	</div>
</template>

<script>
	import gql from 'graphql-tag'
	export default{	
		data() {
			return {
   	 		messages:  ['hello', 'vue', 'js'],
    		userAchievements: [
    		]
  		}
		},
		methods:{
			testApollo: function() {
				this.$apollo.query({
        	query: gql`
						query{
 							GetAchievementsByUsernames(names :["Cristian"]){
    						username
    						achievements {
									name
     	 						description
    						}
			  			}
						}`,
					fetchPolicy: "no-cache"
     }).then(res => {
				console.log(res.data.GetAchievementsByUsernames[0].achievements);
				this.userAchievements=res.data.GetAchievementsByUsernames[0].achievements;
     	})
     }
		
   },
	created(){
		this.testApollo();
	}


	}
</script>

<style>
	.title {
		font-family: 'Roboto', sans-serif;
	}
</style>

