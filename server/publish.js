Meteor.publish('TodoList', function(){
	return TodoList.find();
})