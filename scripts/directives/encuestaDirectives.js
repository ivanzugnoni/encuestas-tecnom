'use strict';

encuestasApp
	.directive('preguntaMultipleChoice', function(){
		return	{
			templateUrl: '/views/preguntaMultipleChoice.html'
		};
})
	.directive('preguntaTextoParrafo', function(){
		return {
			templateUrl: '/views/preguntaTextoParrafo.html'
		};
});