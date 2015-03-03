encuestasApp.controller('LoaderCtrl', function ($scope) {

    $scope.cargandoSitio = false;
    $scope.text = '';

    $scope.$on('mostrarCargando', $scope.comienzaCarga);

    $scope.$on('ocultarCargando', $scope.detieneCarga);

    $scope.comienzaCarga = function (text) {
        $scope.text = text;
        $scope.cargandoSitio = true;
    }

    $scope.detieneCarga = function () {
        $scope.cargandoSitio = false;
        $scope.text = '';
    }
});
