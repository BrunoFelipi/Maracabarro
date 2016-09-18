app.config(function($routeProvider){
    $routeProvider
    //Páginas de usuário
    .when('/', {
        templateUrl: 'views/usuario/login.html'
    })
    .when('/login', {
        templateUrl: 'views/usuario/login.html'
    })
    .when('/esqueceuSenha', {
        templateUrl: 'views/usuario/esqueceuSenha.html'
    })
    .when('/cadastro', {
        templateUrl: 'views/usuario/cadastro.html'
    })
    .when('/alterarSenha', {
        templateUrl: 'views/usuario/alterarSenha.html'
    })
    //Página principal
    .when('/principal', {
        templateUrl: 'views/principal.html'
    })
    //Páginas de jogos
    .when('/novoJogo', {
        templateUrl: 'views/jogo/novoJogo.html'
    })
    .when('/historicoJogos', {
        templateUrl: 'views/jogo/historicoJogos.html'
    })
    .when('/editarJogo', {
        templateUrl: 'views/principal.html'
    })
    //Páginas de gerenciamentos
    .when('/comunicados', {
        templateUrl: 'views/gerenciamento/comunicados.html'
    })
    .when('/calendario', {
        templateUrl: 'views/gerenciamento/calendario.html'
    })
    .when('/eventos', {
        templateUrl: 'views/gerenciamento/eventos.html'
    })
    //Páginas de configuração
    .when('/app', {
        templateUrl: 'views/configuracao/app.html'
    })
    .when('/conta', {
        templateUrl: 'views/configuracao/conta.html'
    })
});
