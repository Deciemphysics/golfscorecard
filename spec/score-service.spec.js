var ScoreService = require('../js/score-service.js');

describe('ScoreService', function () {
    var scoreService;
    beforeEach(function () {
        scoreService = new ScoreService();
    })

    describe('getOutScore', function () {
        it('should return the correct sum of the front nine', function () {
            var scores = [];
            var expectedOut = 0;
            for (var hole = 0; hole < 9; hole++) {
                var randomScore = Math.floor(Math.random() * 10);
                scores[hole] = randomScore;
                expectedOut = expectedOut + randomScore;
            }
            var actualOutScore = scoreService.getOutScore(scores);
            expect(actualOutScore).toEqual(expectedOut);
        })
        it('should throw a character found error when input has a character', function () {

        })
    })
    describe('getInScore', function () {
        it('should return the correct sum of the back nine', function(){
            var scores = [];
            var expectedIn = 0;
            for (var hole = 9; hole < 18; hole++) {
                var randomScore = Math.floor(Math.random() * 10);
                scores[hole] = randomScore;
                expectedIn = expectedIn + randomScore;
            }
            var actualInScore = scoreService.getInScore(scores);
            expect(actualInScore).toEqual(expectedIn);
        })
    })
    describe('getTotalScore', function () {
        it('should return the correct sum of the front nine plus the back nine', function(){
            var scores = [];
            var expectedTotal = 0;
            for (var hole = 0; hole < 18; hole++){
                var randomScore = Math.floor(Math.random() * 10);
                scores[hole] = randomScore;
                expectedTotal = expectedTotal + randomScore; 
            }
            var actualTotal = scoreService.getTotalScore(scores);
            expect(actualTotal).toEqual(expectedTotal);

        })
    })
    describe('getScoreToPar', function () {
        it('should return the difference from the par', function(){
            var scores = [];
            var par = [];
            var expectedTotal = 0;
            var expectedPar = 0;
            var expectedDifference = 0;
            for (var hole = 0; hole < 18; hole++){
                var randomScore = Math.floor(Math.random() *10);
                var randomPar = Math.floor(Math.random() * 7);
                scores[hole] = randomScore;
                par[hole] = randomPar;
                expectedPar += randomPar;
                expectedTotal += randomScore;
            }
            expectedDifference = expectedTotal - expectedPar;
            var actualDifference = scoreService.getScoreToPar(scores, par);
            expect(actualDifference).toEqual(expectedDifference);

        })

    })
})