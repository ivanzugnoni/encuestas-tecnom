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
            // puede ser usado como Elemento y Atributo
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


.filter('JsDate', function () {
    return function (fecha) {
        return new Date(fecha);
    }
})

.filter('JsonDateToJSDate', function () {
    return function (fecha) {
        return new Date(parseInt(fecha.replace('/Date(', '')));
    }
})

.directive('inputBuscador', function () {
    return {
        restrict: "E",
        scope: {
            texto: '='
        },
        template:
            "<div class=\"right-inner-addon\" style=\"margin-bottom:19px;\">"
                   +"<span id=\"iconSpan\">"
                   +"<i ng-show=\"texto.length > 0\" ng-click=\"texto = ''\" class=\"fa fa-times fa-2\"></i>"
                   +"</span>"
                   +"<input type=\"search\" class=\"form-control\" focus-me=\"true\" ng-model=\"texto\" placeholder=\"Filtro\">"
               +"</div>",
        transclude: true
    };
})

.directive('masterHeader', function () {
    return {
        restrict: 'E',//<master-header></master-header> hace referencia a un elemento/etiqueta html
        template:
                "<div class=\"row\">"
                    +"<div class=\"col-lg-12\">"
                        +"<div class=\"page-header clearfix\">"
                            +"<div class=\"\" ng-transclude>"
                            +"</div>"
                        +"</div>"
                    +"</div>"
                +"</div>",
        transclude: true
    };
})

.directive('headerTituloFull', function () {
    return {
        restrict: "E",
        template:
            "<div class=\"col-lg-12\">"
                +"<div ng-transclude>"
                +"</div>"
            +"</div>",
        transclude: true
    };
})

.directive('headerTitulo', function () {
    return {
        restrict: "E",
        template:
            "<div class=\"col-lg-8\">"
                +"<div ng-transclude>"
                +"</div>"
            +"</div>",
        transclude: true
    };
})

.directive('headerRight', function () {
    return {
        restrict: "E",
        template:
            "<div class=\"col-lg-4 text-right\" ng-transclude style=\"margin-top:28px;\">"
            +"</div>",
        transclude: true
    };
})

;
