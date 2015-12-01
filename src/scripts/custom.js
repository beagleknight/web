(function () {
    "use strict";

    var app = angular.module('beagleknightApp', []);

    app.config( ['$provide', function ($provide){
        $provide.decorator('$browser', ['$delegate', function ($delegate) {
            $delegate.onUrlChange = function () {};
            $delegate.url = function () { return ""; };
            return $delegate;
        }]);
    }]);


    function groupBy(input, n) {
        var result = [], i, j;

        for (i = 0; i < input.length; i += n) {
            var aux = [];
            for (j = 0; j < n; j += 1) {
                aux.push(input[i+j]);
            }
            result.push(aux);
        }

        return result;
    }

    app.factory("Game", ['$window', function ($window) {
        var games = [
            {
                name: "hint",
                title: "HINT: Hint is not Tetris",
                description: "Created while I was studying computer science. It was build from scratch using C++ and OpenGL. You are a monster called Aka-kun and you need to collect a star on each level. It’s a puzzle game where you can push and rotate tetrominos on a 3D environment. We included a fancy level editor to create custom levels and a basic 2-player cooperative mode.",
                technology: "C++, OpenGL",
                genres: "puzzle",
                playable: false,
                screenshots: [
                    { url: 'cover.png' }
                ]
            },
            {
                name: "mags",
                title: "Que vénen els reis!",
                description: "Based on the tradition of the Wise Men throwing candy to the children after Christmas. We created this game in i++ to promote our company on our Facebook page. It’s an action game where you need to click the children to throw them candy when they are hungry. It includes some basic animations and particle effects.",
                technology: "HTML5, custom game engine",
                genres: "action",
                playable: true,
                screenshots: [
                    { url: 'cover.png' }
                ]
            }
        ];

        return {
            all: function () {
                return games;
            },
            findByPath: function () {
                var path = $window.location.hash;
                var found = games.filter(function (game) {
                    return "#" + game.name === path;
                });
                if (found) {
                    return found[0];
                }
            }
        };
    }]);

    app.controller("PortfolioController", ['$scope', 'Game', function ($scope, Game) {
        $scope.games = groupBy(Game.all(), 2);
    }]);

    app.controller("GameController", ['$scope', 'Game', function ($scope, Game) {
        $scope.game = Game.findByPath();
        $scope.game.screenshots = groupBy($scope.game.screenshots, 3);
    }]);
}());
