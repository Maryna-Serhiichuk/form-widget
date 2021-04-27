$( function() {
	$( ".widget button" )
		.eq( 0 ).button()
		.end().eq( 0 ).button( {
			icon: "ui-icon-circle-arrow-e",
			iconPosition: "end"
		} )
} );