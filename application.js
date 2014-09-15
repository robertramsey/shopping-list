$(document).ready(function () {
	$('#add-button').click(function() {
		if( $('#add-todo').val().length == 0 ) {
				$('#error').show();
				$('#add-todo').val("");
		} else { 
				$('ul').append('<li class="todo"><button class="item">Done</button>' + $('#add-todo').val() + '</li>');
				$('#add-todo').val("");
				$('#error').hide();

		};	
	});
	$('ul').on('click', '.item', function() {
		$(this).closest('li').toggleClass('todo done');
		$(this).remove();
	});

});