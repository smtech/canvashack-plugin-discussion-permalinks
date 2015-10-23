var canvashack = {
	addPermalinks: function() {
		$('#discussion_subentries li.entry').each(function() {
			var id = $(this).prop('id');
			if (id !== undefined && id.substr(0, 6) === 'entry-') {
				$(this).find('.ui-menu').first().append('<li class="ui-menu-item" role="presentation"><a href="#' + id + '"><i class="icon-link"></i> permalink</a></li>');
			}
		})
	}
}