$(function() {
	$.event.special.swipe.scrollSupressionThreshold = 10; // More than this horizontal displacement, and we will suppress scrolling.
	$.event.special.swipe.horizontalDistanceThreshold = 30; // Swipe horizontal displacement must be more than this.
	$.event.special.swipe.durationThreshold = 500;  // More time than this, and it isn't a swipe.
	$.event.special.swipe.verticalDistanceThreshold = 75; // Swipe vertical displacement must be less than this.
	$( "[data-role='header'], [data-role='footer'], [data-role='panel'] " ).toolbar();
	$("[data-role=panel]").panel().enhanceWithin();
	$( document ).on( "swiperight", "body", function( e ) {
		// e.preventDefault();
		//if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
			$( "#left-panel" ).panel( "open" );
		//}
	});
});