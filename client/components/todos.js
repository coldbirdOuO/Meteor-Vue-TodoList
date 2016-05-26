Template.todos.onRendered(function(){
	Vue.use(window['vue-validator'])
	var vm = new Vue({
		el: '#forVue',
		data: {
			title: 'Create a task:',
			message:'',
			todosli:[],
		},
		methods: {
			addTodo: function(e) {
				e.preventDefault();
				var text = this.message.trim();
				Meteor.call('addTodo', text);
				this.message = '';
			},
			deleteTodo: function(id) {
				Meteor.call('deleteTodo', id);
			},
		},
		sync: {
		    'todosli': function() {
		      Meteor.subscribe('TodoList')
		      return TodoList.find()
		    },
		}
	})
})

