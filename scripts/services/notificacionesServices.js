encuestasApp.factory('NotificacionesService', ['$http', function ($http) {
    return {
        Get: function () {
//m            return $http.get('/api/v1/base/notificaciones/getall');
            return $http.get('');
        },
        GetUnread: function () {
//m            return $http.get('/api/v1/base/notificaciones/unread');
            return $http.get('');
        },
        Delete: function (id) {
//m            return $http.delete('/api/v1/base/notificaciones/delete/' + id);
            return $http.delete('');
        },
        Readed: function (id) {
//m            return $http.put('/api/v1/base/notificaciones/setread/' + id);
            return $http.put('');
        }

    }
}]);
