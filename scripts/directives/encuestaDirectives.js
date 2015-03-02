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
})
	.directive('preguntaFecha', function(){
		return {
			templateUrl: '/views/preguntaFecha.html'
		};
})
    .directive('preguntaGrilla', function(){
        return {
            templateUrl: '/views/preguntaGrilla.html'
        };
});