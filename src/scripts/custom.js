(function () {
    "use strict";

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

    function noWip (game) {
        return !game.wip;
    }

    var app = angular.module('beagleknightApp', []);

    app.config( ['$provide', function ($provide){
        $provide.decorator('$browser', ['$delegate', function ($delegate) {
            $delegate.onUrlChange = function () {};
            $delegate.url = function () { return ""; };
            return $delegate;
        }]);
    }]);

    app.controller("PortfolioController", ['$scope', 'Game', function ($scope, Game) {
        $scope.games = groupBy(Game.all().filter(noWip).reverse(), 2);
    }]);

    app.controller("GameController", ['$scope', 'Game', function ($scope, Game) {
        $scope.game = Game.findByPath();
        $scope.game.screenshots = groupBy($scope.game.screenshots, 3);
    }]);

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
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' },
                    { url: '03.png' },
                    { url: '04.png' },
                    { url: '05.png' },
                    { url: '06.png' }
                ]
            },
            {
                name: "mags",
                title: "Que vénen els reis!",
                description: "Based on the tradition of the Wise Men throwing candy to the children after Christmas. We created this game in i++ to promote our company on our Facebook page. It’s an action game where you need to click the children to throw them candy when they are hungry. It includes some basic animations and particle effects.",
                technology: "HTML5, custom game engine",
                genres: "action",
                playable: true,
                demoUrl: "http://imesmes-mags.herokuapp.com/",
                screenshots: [
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' },
                    { url: '03.png' },
                    { url: '04.png' }
                ]
            },
            {
                name: "fag",
                title: "FAG: Fast Arcade Game",
                description: "Created just for fun! It’s a basic shooter game where you need to survive waves of enemies. I included a ranking to promote competition between my co-workers and friends and it was a success!.",
                technology: "HTML5, custom game engine",
                genres: "shooter",
                playable: true,
                demoUrl: "http://imesmes-fag.herokuapp.com/",
                screenshots: [
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' },
                    { url: '03.png' }
                ]
            },
            {
                name: "ld22-alone-in-the-war",
                title: "LD22: Alone in the war",
                description: "My first game jam! A friend of mine told me about these events and asked me to join him. We created some kind of strategy game using C++ from scratch in less than 48… and we failed so hard! Actually it was a very good lesson! Don’t use C++ for a game jam never ever.",
                technology: "C++",
                genres: "strategy",
                playable: false,
                screenshots: [
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' }
                ]
            },
            {
                name: "ld23-mothly-s-world",
                title: "LD23: Mothly’s world",
                description: "In our second game jam we learnt the lesson and tried Java instead of C++. We build a mini game engine based on libgdx called Frisky. In Mothly’s world you controlled a fluor agent in order to clean some mouth’s bacteries. It was a nice side scrolling shooter mixed with some asteroids mechanics.",
                technology: "Java, libgdx",
                genres: "shooter",
                playable: false,
                screenshots: [
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' },
                    { url: '03.png' },
                    { url: '04.png' }
                ]
            },
            {
                name: "adv-memory-classic",
                title: "Adverway: Memory Classic",
                description: "This game was the first on Adverway’s catalog. It is a simple game where the player needs to find pairs in a board. It uses my custom game engine written in HTML called Ethon.",
                technology: "HTML5, custom game engine",
                genres: "puzzle, memory",
                playable: true,
                demoUrl: "https://clientgameapp.com/static/1054",
                screenshots: [
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' },
                    { url: '03.png' },
                    { url: '04.png' }
                ]
            },
            {
                name: "ld24-zombie-0",
                title: "LD24: Zombie 0",
                description: "In this game the player controls the first human infected by a powerful virus turning him in a Zombie. He needs to escape a facility without being seen. If you kill a guard he will become a zombie and follow you.",
                technology: "Java, custom game engine",
                genres: "strategy, stealth",
                playable: false,
                screenshots: [
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' },
                    { url: '03.png' }
                ]
            },
            {
                name: "adv-reactions",
                title: "Adverway: Reactions",
                description: "Based on the glorious Asteroids game. This game was a shooter in a toroidal world where the player need to shoot different targets. A target may split in a smaller versions of them filling the screen in time and making the game more difficult.",
                technology: "HTML5, custom game engine",
                genres: "shooter",
                playable: true,
                demoUrl: "https://clientgameapp.com/static/1056",
                screenshots: [
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' },
                    { url: '03.png' },
                    { url: '04.png' }
                ]
            },
            {
                name: "adv-puzzle",
                title: "Adverway: Puzzle",
                description: "A simple puzzle game. The player needs to find the correct position of each jigsaw in a period of time.",
                technology: "HTML5, custom game engine",
                genres: "puzzle",
                playable: true,
                screenshots: [
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' },
                    { url: '03.png' }
                ]
            },
            {
                name: "ld26-speed-square",
                title: "LD26: Speed Square!",
                description: "A simple platformer game made in 48h. The game featured different behaviours for the enemies and a basic level editor.",
                technology: "Java, custom game engine",
                genres: "platforms",
                playable: false,
                screenshots: [
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' },
                    { url: '03.png' },
                    { url: '04.png' }
                ]
            },
            {
                name: "ld27-once-upon-a-flight",
                title: "LD27: Once upon a flight",
                description: "This game was our last using Java. The player should remember the position of the enemies and obstacles while moving up. Then he needed to avoid those traps to reach the bottom safely.",
                technology: "Java, custom game engine",
                genres: "runner, memory",
                playable: false,
                screenshots: [
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' },
                    { url: '03.png' }
                ]
            },
            {
                name: "adv-jewels",
                title: "Adverway: Jewels",
                description: "Based on the Bejeweled game or Candy Crush Saga we created a match-3 game for our Adverway platform. The player needed to make as many combinations as possible in a time limit. As a basic modification I included a bonus for match-4 clearing a row or a column and another bonus for match-5 clearing all the gems of the same type out of the board.",
                technology: "HTML5, custom game engine",
                genres: "puzzle, match-3",
                playable: true,
                demoUrl: "https://clientgameapp.com/static/1058",
                screenshots: [
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' },
                    { url: '03.png' },
                    { url: '04.png' }
                ]
            },
            {
                name: "adv-sneaky-words",
                title: "Adverway: Sneaky Words",
                description: "A classic reborn! We made a game based on the Snake game with a twist. The player’s objective was eating some letters in a particular order to create a word.",
                technology: "HTML5, custom game engine",
                genres: "puzzle, action",
                playable: true,
                demoUrl: "https://clientgameapp.com/static/1511/",
                screenshots: [
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' },
                    { url: '03.png' },
                    { url: '04.png' }
                ]
            },
            {
                name: "ld29-speluncraft-without-crafting",
                title: "LD29: Speluncraft without crafting",
                description: "For that Ludum Dare edition we gave a try to Python and created a simple game using PyGame. The main objective of the game was going underground and collect gold without being killed. The player’s only equipment was a pick and the earth material become stronger as you went down.",
                technology: "Python, PyGame",
                genres: "platforms, sandbox",
                playable: false,
                screenshots: [
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' },
                    { url: '03.png' },
                    { url: '04.png' }
                ]
            },
            {
                name: "ld32-lagman",
                title: "LD32: Lagman",
                description: "This game was the result of our frustration with my connectivity issues. We usually work with my friend using Skype and I had too much lag that weekend. We ended creating a kind of lag simulator and it was a perfect excuse to start using my preferred HTML5 game engine called Phaser. In Lagman the player has lag and he uses it for his own advantage killing their enemies spawning on a invalid position.",
                technology: "HTML5, PhaserJS",
                genres: "platforms, lag simulator",
                playable: true,
                demoUrl: "http://lagman.surge.sh/",
                screenshots: [
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' },
                    { url: '03.png' }
                ]
            },
            {
                name: "adv-evolution",
                title: "Adverway: Evolution",
                description: "Evolution was a clone of the famous 2048 game. We didn’t create anything new but for me was a great challenge. I created it from scratch using my own game engine. It wasn’t as good as the original one but the result was pretty good.",
                technology: "HTML5, custom game engine",
                genres: "puzzle",
                playable: true,
                demoUrl: "https://clientgameapp.com/static/1503/",
                screenshots: [
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' },
                    { url: '03.png' },
                    { url: '04.png' }
                ]
            },
            {
                name: "ld33-my-planet-needs-me",
                title: "LD33: My planet needs me!",
                description: "We wanted to create a stealth game. The player controlled a monster who was tired of living in a child wardrobe and wanted to return to his planet. The game featured our first in-game tutorial but we didn’t have enough time to include multiple levels.",
                technology: "HTML5, PhaserJS",
                genres: "stealth",
                playable: true,
                demoUrl: "https://dl.dropboxusercontent.com/u/2427705/ld33/index.html",
                screenshots: [
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' },
                    { url: '03.png' },
                    { url: '04.png' }
                ]
            },
            {
                name: "solar-system-simulation",
                title: "Solar System Simulation",
                description: "I started a course on Coursera called “Introduction to Game Development”. I wanted to learn unity with real projects so this simulation was a good starting point. I learnt about the Unity interface, the camera, game objects and simple components.",
                technology: "Unity3D",
                genres: "simulator",
                playable: true,
                demoUrl: "https://dl.dropboxusercontent.com/u/2427705/SolarSystem/index.html",
                screenshots: [
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' },
                    { url: '03.png' }
                ]
            },
            {
                name: "roller-madness",
                title: "Roller Madness",
                description: "In this game you control a ball through a platforms level and you need to collect some coins evading enemies without falling. This game was my second using Unity3D and I learnt about Prefabs, Particles Systems and how the Input Manager works.",
                technology: "Unity3D",
                genres: "action, platforms",
                playable: true,
                demoUrl: "https://dl.dropboxusercontent.com/u/2427705/RollerMadness/index.html",
                screenshots: [
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' },
                    { url: '03.png' }
                ]
            },
            {
                name: "box-shooter",
                title: "Box Shooter",
                description: "As I was working with Unity3D I thought where the programming has gone? In this game I learnt how to use scripts to enhance the possibilities with this awesome game engine. I created my own simple scripts to manipulate the enemy's behavior.",
                technology: "Unity3D",
                genres: "shooter",
                playable: true,
                demoUrl: "https://dl.dropboxusercontent.com/u/2427705/Box%20Shooter/index.html",
                screenshots: [
                    { url: 'cover.png' },
                    { url: '01.png' },
                    { url: '02.png' },
                    { url: '03.png' }
                ]
            },
            {
                wip: true,
                name: "mind-the-gap",
                title: "Mind the gap",
                description: "You are a ninja who only knows two techniques: the tiger’s jump and the armadillo’s rolling. In this game you need to remember the obstacles and traps during a quick swipe of the camera. Then you enter the ninja’s commands and he perform them automatically.",
                technology: "HTML5, PhaserJS",
                genres: "runner, memory",
                playable: true,
                screenshots: [
                    { url: 'cover.png' }
                ]
            },
            {
                wip: true,
                name: "well-of-eternity",
                title: "Well of eternity",
                description: "I started a small project with a few friends called “The Mad Knights”. We aim for creating some games and learn something. Currently we are working on this game, a kind of vertical runner with small roguelike flavours like procedural generation of the map.",
                technology: "HTML5, PhaserJS",
                genres: "runner, roguelike",
                playable: true,
                screenshots: [
                    { url: 'cover.png' }
                ]
            },
            {
                wip: true,
                name: "hint-hd-edition",
                title: "Hint HD Edition",
                description: "Feeling nostalgic about the first game which I collaborated on the university I wanted to create some kind of tribute for it. I decided to keep learning about Unity creating a new version of HINT.",
                technology: "Unity3D",
                genres: "puzzle",
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

    $(function () {
        $('.screenshots a').magnificPopup({
            type: "image",
            gallery: {
                enabled: true
            }
        });
    });
}());
