const app = Vue.createApp({
	data(){
		return{
			name: 'Teresa Teng',
			age: 34,
			imageUrl: 'https://vuejs.org/logo.svg'
		};
	},
	methods: {
		calculateAge(){
			return this.age + 5;
		},
		calculateRandom(){
			return Math.random();
		}
	}
});

app.mount('#assignment');