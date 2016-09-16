app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/login.html'
    })
    .when('/login', {
        templateUrl: 'views/login.html'
    })
    .when('/principal', {
        templateUrl: 'views/principal.html'
    })
    .when('/novaCuca', {
        templateUrl: 'views/novaCuca.html'
    })
    .when('/minhas', {
        templateUrl: 'views/minhas.html'
    })
    .when('/esqueceuSenha', {
        templateUrl: 'views/esqueceuSenha.html'
    })
    .when('/cadastro', {
        templateUrl: 'views/cadastro.html'
    })
    .when('/alterarSenha', {
        templateUrl: 'views/alterarSenha.html'
    })
    //More Here
});
