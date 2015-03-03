encuestasApp.controller('NavBarCtrl', ['$scope', '$window', 'UserService', 'BuscadorService', 'NotificacionesService', function ($scope, $window, UserService, BuscadorService, NotificacionesService) {
    //Me
    UserService.Me().then(function (data) { $scope.me = data; });

    //Buscador
    $scope.buscador = {}
    $scope.buscador.string = '';
    $scope.buscador.show = false;
    $scope.buscador.loading = false;
    $scope.buscador.results = null;

    $scope.buscador.buscar = function () {
        if ($scope.buscador.string != '') {
            if ($scope.buscador.loading == false) {
//m                BuscadorService.busqueda($scope.buscador.string).then(
//m                    function (data) {
//m                        $scope.buscador.results = data.hits.hit;
//m                        $scope.buscador.empty = false;
//m                        $scope.buscador.overflow = false;
//m                        $scope.buscador.loading = false;
//m                        $scope.$apply();
//m                    },
//m                    function (error) {
//m                        $scope.$emit('labcom.error', { titulo: 'Ha ocurrido un error al realizar la busqueda', object: error });
//m                        $scope.buscador.loading = false;
//m                    }
//m                );

                //BuscadorService.Buscar($scope.buscador.string).success(function (data) {
                //    $scope.buscador.results = data;
                //    $scope.buscador.empty = true;
                //    $scope.buscador.overflow = false;

                //    for (var i = 0; i < data.length; i++) {
                //        if (data[i].Overflow == true) {
                //            $scope.buscador.overflow = true;
                //        } else {
                //            if (data[i].Entidades.length > 0)
                //                $scope.buscador.empty = false;
                //        }
                //    }

                //    $scope.buscador.loading = false;
                //}).error(function (error) {
                //    $scope.$emit('labcom.error', { titulo: 'Ha ocurrido un error al realizar la busqueda', object: error });
                //    $scope.buscador.loading = false;
                //})
                $scope.buscador.last = $scope.buscador.string;
                $scope.buscador.loading = true;
            } else {
                alert("Por favor espere..")
            }
        } else
            alert("Ingrese el texto a buscar");
    };

    $scope.buscador.cerrar = function () {
        $scope.buscador.loading = false;
        $scope.buscador.show = false;
        $scope.buscador.string = '';
    };

    $scope.buscador.limpiar = function () {
        $scope.buscador.loading = false;
        $scope.buscador.results = null;
        $scope.buscador.string = '';
    };

    $scope.buscador.abrir = function () {
        $scope.buscador.show = true;
        if ($scope.buscador.empty == true) {
            $scope.buscador.results = null;
        }
    };

    //Notificaciones
    $scope.notificaciones = {};
    $scope.notificaciones.news = [];
    $scope.notificaciones.resize = function () {
        //TODO: Hacer directiva para clase notifLabCom
        return false;
    };
    $scope.notificaciones.redirect = function (notif) {
        if (notif.Link != "") {
            if (notif.Link.indexOf('?') === -1) {
                notif.Link = notif.Link + '?nId=' + notif.Id;
            } else {
                notif.Link = notif.Link + '&nId=' + notif.Id;
            }
            $window.location.href = notif.Link;
        }
    };
    $scope.notificaciones.readed = function (notif) {
        NotificacionesService.Readed(notif.Id).success(function (data) {
            var index = $scope.notificaciones.news.indexOf(n);
            $scope.notificaciones.news.splice(index, 1);
        })
    };

    // Intervalo de 30 segundos para notificaciones
    var notificacionesInterval = setInterval(function () {

        NotificacionesService.GetUnread().success(function (data) {
            $scope.actualizarNotificaciones(data.Notificaciones);
            //$scope.actualizarChat(data.ChatActivado);
        })

    }, 30000);

    // Primera carga de notificaciones
    NotificacionesService.GetUnread().success(function (data) {
        $scope.actualizarNotificaciones(data.Notificaciones);
       // $scope.actualizarChat(data.ChatActivado);
    })

    $scope.actualizarNotificaciones = function (newNotif) {
        var bIds = {};
        $scope.notificaciones.news.forEach(function (obj) {
            bIds[obj.Id] = obj;
        });

        // Return all elements in A, unless in B
//m        difference = newNotif.filter(function (obj) {
//m            return ((!(obj.Id in bIds)));
//m        });

//m        if (difference.length > 0)
//m            $('.notifAdviceLabCom').shake();

//m        difference.forEach(function (entry) {
//m            LabCom.PageView.ShowNotification(entry);
//m        });

        // Saco del box las que son informativas o permanentes
//m        var notifNoBox = jQuery.grep(newNotif, function (elem, pos) {
//m            return ((elem.ModoVisualizacion == 'Informativa')
//m                || (elem.ModoVisualizacion == 'Permanente'));
//m        });

//m        if (notifNoBox.length > 0) {
//m            var pos;
//m            notifNoBox.forEach(function (obj) {
//m                pos = jQuery.inArray(obj, newNotif);
//m                newNotif.splice(pos, 1);
//m            });
//m        }

//m        $scope.notificaciones.news = newNotif;
    }

    $scope.agregarNotificaciones = function (n) {
        $scope.notificaciones.news = n;
        if ($scope.notificaciones.news.length > 0)
            $('.notifAdviceLabCom').shake();
    }
}]);
