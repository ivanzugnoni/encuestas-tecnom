encuestasApp.factory('UserService', ['$http', '$cacheFactory', '$q', function ($http, $cacheFactory, $q) {
    var userCache = $cacheFactory('user-cache');

    return {
        Me: function () {
            if (userCache.get('u') != null) return userCache.get('u');

            var deferred = $q.defer();
//m            $http.get('/api/v1/base/usuarios/me')
            $http.get('')
                .success(function (data) {
                    if (data.roles) {
                        var roles = angular.copy(data.roles);
                        data.rolesEntidades = roles;
                        for (var i = 0; i < data.roles.length; i++) {
                            data.roles[i] = data.roles[i].idRol;
                        }
                    }
                    data.tieneRol = function (roles) {
                        var masdeuno = roles.indexOf(',') > -1 ? true : false;
                        if (masdeuno) {
                            var rolesarray = roles.split(',');
                            for (var i = 0; i < rolesarray.length; i++) {
                                if (data.roles.indexOf(rolesarray[i]) == -1) return false;
                            }
                            return true;
                        }
                        return data.roles.indexOf(roles) > -1 ? true : false;
                    }
                    userCache.put('u', data);
                    deferred.resolve(data);
                })
                .error(function (error, status) {
                    modalTecnom(info, 'Error con usuario', error);
                    deferred.reject(error, status);
                })
            return deferred.promise;
        }
    }
}]);
