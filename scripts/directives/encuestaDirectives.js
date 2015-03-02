'use strict';

encuestasApp
	.directive('preguntaMultipleChoice', function(){
		return	{
            restrict: 'EA',
			templateUrl: 'views/preguntaMultipleChoice.html'
		};
})
    .directive('preguntaTextoParrafo', function(){
        return {
            restrict: 'EA',
            templateUrl: 'views/preguntaTextoParrafo.html'
        };
})
    .directive('preguntaTexto', function(){
        return {
            restrict: 'EA',
            templateUrl: 'views/preguntaTexto.html'
        };
})
    .directive('preguntaChecklist', function(){
        return  {
            restrict: 'EA',
            templateUrl: 'views/preguntaChecklist.html'
        };
})
    .directive('preguntaFecha', function(){
        return {
            restrict: 'EA',
            templateUrl: 'views/preguntaFecha.html'
        };
})
    .directive('preguntaNumero', function(){
        return {
            restrict: 'EA',
            templateUrl: 'views/preguntaNumero.html'
        };
})
    .directive('preguntaGrilla', function(){
        return  {
            restrict: 'EA',
            templateUrl: 'views/preguntaGrilla.html'
        };
})


;
