<template>
	<div>
  <li v-for="logro in shoppingItems" v-bind:key="logro">
		<div v-if=" logro.shared == true">
    	name:	{{ logro.name }} <br>  description: {{ logro.description }}
		</div>
  </li>		
	</div>
</template>

<script>
	export default{	
		data() {
			return {
   	 		messages:  ['hello', 'vue', 'js'],
    		shoppingItems: [
      		{name: 'logro1', description: 'por lograr el logro 1',shared: true},
      		{name: 'logro2', description: 'por lograr el logro 2',shared :false},
      		{name: 'logro3', description: 'por lograr el logro 3',shared :true}
    		]
  		}
		}
	}
</script>

<style>
</style>
