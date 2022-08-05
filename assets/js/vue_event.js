const app = Vue.createApp({
	data(){
		return{
			counter: 0,
			name: '',
			lastName: '',
			confirmedName: '',
			userInput: '',
			confirmedInput: '',
			nameReset: '',
			// fullName: '',
			number: 0,
		};
	},
	watch: {
		counter(value){
			if(value > 50){
				const that = this;
				setTimeout(function(){
					that.counter = 0;
				}, 1000);
			}
		},
		// name(value){
		// 	if(value === ''){
		// 		return this.fullName = '';
		// 	}
		// 	this.fullName = value + ' ' + this.lastName;
		// },
		// lastName(value){
		// 	if(value === ''){
		// 		return this.fullName = '';
		// 	}
		// 	this.fullName = this.name + ' ' + value;
		// },
		result(){
			console.log('Watcher executing...');
			const that = this;
			setTimeout(function(){
				that.number = 0;
			}, 5000);
		},
	},
	computed: {
		fullName(){
			console.log('Running again...');
			if(this.name === '' || this.lastName === ''){
				return '';
			}
			return this.name + ' ' + this.lastName;
		},
		result(){
			console.log(this.number);
			if(this.number < 37){
				return 'Not there yet!';
			} else if(this.number === 37){
				return this.number;
			} else{
				return 'Too much!';
			}
		}
	},
	methods: {
		submitForm(event){
			// event.preventDefault();
			alert('Submitted!');
		},
		confirmInput(){
			this.confirmedName = this.name;
		},
		setName(event){
			this.name = event.target.value;
		},
		outputFullname(){
			console.log('Running again...');
			if(this.name === ''){
				return '';
			}
			return this.name + ' ' + 'Nguyen';
		},
		add(num){
			return this.counter = this.counter + num;
		},
		reduce(num){
			return this.counter = this.counter - num;
		},
		showAlert(){
			alert('This works!');
		},
		saveInput(event){
			this.userInput = event.target.value;
		},
		confirmUserInput(){
			this.confirmedInput = this.userInput;
		},
		resetInput(){
			this.nameReset = '';
		},
		addNumber(num){
			this.number = this.number + num;
		}
	}
});

app.mount('#events');