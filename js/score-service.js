function ScoreService() {
    this.getOutScore = function (scores) {
        var out = 0;
        for (var hole = 0; hole < 9; hole++) {
            out += scores[hole];
        }
        return out;
    }
}

module.exports = ScoreService;