encuestasApp.controller('notificacionesCtrl', function ($scope, $modal, $rootScope) {

    $scope.Notificaciones = LabCom.PageData.getViewDataObject().Notificaciones;

    $scope.textoFiltro = "";
    $scope.marcarLeida = function (n, redirect, e) {
        if (!redirect) {
            e.stopPropagation();
        }
        if (n.Leida == false) {
            function okNotif(n) {
                n.Leida = true;
                var scope = angular.element($("nav")).scope();
                scope.safeApply(function () {
                    scope.extRemoveNotification(n);
                });

            }
            LabCom.Base.Notificaciones.setread(n.Id, function () { okNotif(n) }, function () { console.log('Error al marcar la notificacion como leida.') });
            if (redirect) {
                window.location.href = n.Link;
            }
        } else {
            if (redirect) {
                window.location.href = n.Link;
            }
        }

    };

    $scope.extMarcarLeida = function (id) {
        for (var i = 0, m = null; i < this.Notificaciones.length; ++i) {
            if (this.Notificaciones[i].Id == id) {
                m = this.Notificaciones[i];
                break;
            }
        }
        if (m != null) {
            m.Leida = true;
        }
    };

    $scope.eliminarNotif = function (n, e) {
        e.stopPropagation();
        var r = confirm("¿Está seguro de querer eliminar la notificación?");
        if (r == true) {
            function okNotif(n, scope) {
                var index = scope.Notificaciones.indexOf(n);
                scope.Notificaciones.splice(index, 1);

                var scope = angular.element($("nav")).scope();
                scope.safeApply(function () {
                    scope.extRemoveNotification(n);
                });
            }
            LabCom.Base.Notificaciones.delete(n.Id, function () { okNotif(n, $scope) }, function () { console.log('Error al marcar la notificacion como leida.') });
        }
    };

    $scope.irNotif = function (n) {
        if (n.Link != "") {
            if (n.Link.indexOf('?') === -1) {
                n.Link = n.Link + '?nId=' + n.Id;
            } else {
                n.Link = n.Link + '&nId=' + n.Id;
            }
            window.location.href = n.Link;
        }
    };

});
