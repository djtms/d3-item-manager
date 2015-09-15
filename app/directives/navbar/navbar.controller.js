(function() {
    'use strict';

    angular.module('d3-item-manager').controller('NavBarController', NavBarController);

    function NavBarController(classes, gameModes, seasons) {
        var vm = this;

        vm.gameModes = gameModes;

        vm.classes = classes.all;
        vm.setClass = classes.set;
        vm.class = classes.current;
        vm.className = classes.currentName;

        vm.seasons = seasons.all;
        vm.setSeason = seasons.set;
        vm.season = seasons.current;

        vm.showDisclaimer = function(){
            localStorage.setItem('disclaimerRead', 0);
        };
        vm.showOptions = function(){
            localStorage.setItem('showOptions', "true");
        };
    }
})();