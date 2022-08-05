const app = Vue.createApp({
	data(){
		return{
			boxASelected: false,
			boxBSelected: false,
			boxCSelected: false,
			inputClass: '',
			paragraphIsVisible: true,
			inputBackgroundColor: ''
		}
	},
	computed: {
		boxAClasses(){
			return {
				active: this.boxASelected
			};
		},
		paraClasses(){
			return{
				user1: this.inputClass === 'user1',
				user2: this.inputClass === 'user2',
				visible: this.paragraphIsVisible,
				hidden: !this.paragraphIsVisible
			}
		}
	},
	methods: {
		boxSelected(box){
			if(box === 'A'){
				this.boxASelected = !this.boxASelected;
			} else if(box === 'B'){
				this.boxBSelected = !this.boxBSelected;
			} else if(box === 'C'){
				this.boxCSelected = !this.boxCSelected;
			}
		},
		toggleParagraphVisibility(){
			this.paragraphIsVisible = !this.paragraphIsVisible;
		}
	}
});

app.mount('#styling');