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

    })
    describe('getTotalScore', function () {

    })
    describe('getScoreToPar', function () {

    })
})