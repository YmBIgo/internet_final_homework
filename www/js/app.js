var app = angular.module( 'myApp', ['onsen']);

app.controller('topCtrl',function(){
    this.gameStart = function(){
        myNavigator.pushPage('game.html');
    };
});

app.controller('gameCtrl', function(){
   // 後ほど追加します 
});