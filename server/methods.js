Meteor.methods ({
	'addTodo' : function(text) {
		TodoList.insert({
			text: text,
		});
	},
	'deleteTodo' : function(id) {
		TodoList.remove(id)
	}

})