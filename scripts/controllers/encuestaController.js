'use strict';

encuestasApp.controller('encuestaController',['$scope', function($scope){

    $scope.encuesta = {
        "id":"AR-CHEVROLET-ENCUESTA-POSTENTREGA-SERVICIOS-V1.0",
        "tipo":"encuesta",
        "version":"1.0",
        "descripcion":"Encuesta de satisfacción de servicios de postventa",        
        "preguntas":[
            {
                "id":"grado-satisfaccion-concesionario",
                "tipo":"multiple-choice",
                "titulo":"¿Cuál es su grado de satisfacción con el concesionario en esta última visita?",            
                "opciones":[
                    {"opcion":"1 Muy insatisfecho","valor":1},
                    {"opcion":"2 Insatisfecho","valor":2},
                    {"opcion":"3 Medianamente satisfecho","valor":3},
                    {"opcion":"4 Satisfecho","valor":4},
                    {"opcion":"5 Muy satisfecho","valor":5}
                ]
            },
            {
                "id":"atencion-educacion-servicio",
                "tipo":"multiple-choice",
                "titulo":"¿Cómo calificaría la atención y educación del asesor de servicio?",            
                "opciones":[
                    {"opcion":"1 Muy insatisfecho","valor":1},
                    {"opcion":"2 Insatisfecho","valor":2},
                    {"opcion":"3 Medianamente satisfecho","valor":3},
                    {"opcion":"4 Satisfecho","valor":4},
                    {"opcion":"5 Muy satisfecho","valor":5}
                ]
            },
            {
                "id":"tiempo-atender-necesidades",
                "tipo":"multiple-choice",
                "titulo":"¿Cuál es su satisfacción con respecto al tiempo dedicado del asesor de servicio para comprender sus necesidades?",            
                "opciones":[
                    {"opcion":"1 Muy insatisfecho","valor":1},
                    {"opcion":"2 Insatisfecho","valor":2},
                    {"opcion":"3 Medianamente satisfecho","valor":3},
                    {"opcion":"4 Satisfecho","valor":4},
                    {"opcion":"5 Muy satisfecho","valor":5}
                ]
            },
            {
                "id":"informacion-trabajos-realizados",
                "tipo":"multiple-choice",
                "titulo":"¿Cómo calificaría al asesor de servicio en cuanto a la información brindada sobre los trabajos realizados?",            
                "opciones":[
                    {"opcion":"1 Muy insatisfecho","valor":1},
                    {"opcion":"2 Insatisfecho","valor":2},
                    {"opcion":"3 Medianamente satisfecho","valor":3},
                    {"opcion":"4 Satisfecho","valor":4},
                    {"opcion":"5 Muy satisfecho","valor":5}
                ]
            },
            {
                "id":"tiempo-entrega",
                "tipo":"multiple-choice",
                "titulo":"¿Se entregó su vehículo en fecha y hora acordada?",    
                "opciones":[
                    {"opcion":"1 Muy insatisfecho","valor":1},
                    {"opcion":"2 Insatisfecho","valor":2},
                    {"opcion":"3 Medianamente satisfecho","valor":3},
                    {"opcion":"4 Satisfecho","valor":4},
                    {"opcion":"5 Muy satisfecho","valor":5}
                ]
            },
            {
                "id":"reparaciones-primer-visita",
                "tipo":"multiple-choice",
                "titulo":"¿Las reparaciones fueron realizadas correctamente en la primera visita?",    
                "opciones":[
                    {"opcion":"1 Muy insatisfecho","valor":1},
                    {"opcion":"2 Insatisfecho","valor":2},
                    {"opcion":"3 Medianamente satisfecho","valor":3},
                    {"opcion":"4 Satisfecho","valor":4},
                    {"opcion":"5 Muy satisfecho","valor":5},
                ]
            },
            {
                "id":"comentarios-adicionales",
                "tipo":"texto-parrafo",
                "titulo":"¿Desea dejar algún comentario o sugerencia?"            
            },
            {
                "id":"fecha-entrega",
                "tipo":"fecha",
                "titulo":"¿En que fecha se le entregó la unidad?"            
            },
            {
                "id":"grilla-servicios",
                "tipo":"grilla",
                "titulo":"Califique nuestros servicios",
                "columnas": ["1", "2", "3", "4", "5"],
                "filas": [
                    "Atencion al cliente",
                    "Tiempo de entrega de producto",
                    "Disponibilidad horaria"
                ]            
            },
        ]
    }

    $scope.radioModel = '5 Muy satisfecho';

    $scope.today = function() {
        $scope.dt = new Date();
    };

    $scope.clear = function () {
        $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };

    $scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];

}]);
