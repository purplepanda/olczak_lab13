var app = angular.module("randomWords", []);
app.controller("mainCtrl", function($scope) {

    //---------------arrays--------------//
    $scope.wizWords = [ //random word array
        "precede",
        "neat",
        "spotted",
        "governor",
        "efficient",
        "complete",
        "admire",
        "irritating",
        "know",
        "rest",
        "fire",
        "shut",
        "equable",
        "describe",
        "abiding",
        "weak",
        "rude",
        "turn",
        "ants",
        "hungry"
    ];

    $scope.wizPhrases = [ //random phrase array
        "My drink is getting lonely. Would you like to join me with yours?",
        "OK, you can stand next to me as long as you don't talk about the weather.",
        "Your breath smells like peaches.",
        "Hand me the jump leads, the chickens have escaped.",
        "A king never dies, just sleeps.",
        "I grovel at your feet, oh great one!",
        "I crashed into the truck.",
        "What is the price?",
        "Where do you live?",
        "Can you repeat that please?"
    ];

    $scope.wizStyles = [ //random style array
        "style1",
        "style2",
        "style3",
        "style4",
        "style5",
        "style6",
        "style7",
        "style8"
    ];

    $scope.wizBabble = []; //empty array to push to display randoms


    //------------methods for $scope------------//

    $scope.randomWords = randomWords;
    $scope.wordsWithDecorations = wordsWithDecorations;
    $scope.randomPhrases = randomPhrases;
    $scope.phrasesWithDecorations = phrasesWithDecorations;


    //---------------functions-----------------//

    //random word generator
    function randomWords() {
        var word = $scope.wizWords[Math.floor(Math.random() * $scope.wizWords.length)];
        var wordObject = {
            value: word
        };
        $scope.wizBabble.push(wordObject);
    }

    //random style generator, with random word
    function wordsWithDecorations() {
        var word = $scope.wizWords[Math.floor(Math.random() * $scope.wizWords.length)]; //get a random word from random word array
        var style = $scope.wizStyles[Math.floor(Math.random() * $scope.wizStyles.length)]; //get a random style from random style array
        var stylishWordObject = { //create an Object and store random word and style
            value: word,
            style: style
        };
        $scope.wizBabble.push(stylishWordObject); //push Object
    }

    //random phrase generator
    function randomPhrases() {
        var phrase = $scope.wizPhrases[Math.floor(Math.random() * $scope.wizPhrases.length)];
        var phraseObject = {
            value: phrase
        };
        $scope.wizBabble.push(phraseObject);
    }
    //random style generator, with random phrase
    function phrasesWithDecorations() {
        var phrase = $scope.wizPhrases[Math.floor(Math.random() * $scope.wizPhrases.length)];
        var style = $scope.wizStyles[Math.floor(Math.random() * $scope.wizStyles.length)];
        var stylishPhraseObject = {
            value: phrase,
            style: style
        };
        $scope.wizBabble.push(stylishPhraseObject);
    }

});
