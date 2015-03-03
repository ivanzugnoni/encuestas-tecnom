encuestasApp.factory('BuscadorService', ['$http','$q', function ($http,$q) {
    return {
        Buscar: function (text, limite) {
            var search = { texto: text }
            if (typeof limite === 'undefined') search.limit = limite;
//m            return $http.post('/api/v1/buscador', search);
            return $http.post('', search);
        },
        busqueda: function (text) {
            var fs = FastSearch.search(text);
            return fs;
        }
    }
}]);
