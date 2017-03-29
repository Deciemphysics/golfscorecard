function ScoreService() {
    this.getOutScore = function (scores) {
        var out = 0;
        for (var hole = 0; hole < 9; hole++) {
            out += scores[hole];
        }
        return out;
    }
    this.getInScore = function(scores){
        var getIn = 0;
        for (var hole = 9; hole < 18; hole++){
            getIn += scores[hole];
        }
        return getIn;
    } 
    this.getTotalScore = function(scores){
        var total = 0;
        scores.forEach(function(score){
            total += score;
        })
        return total;
    }
    this.getScoreToPar = function(scores,par){
        var total = 0;
        var totalPar = 0;
        var diff = 0;
        scores.forEach(function(score){
            total += score;
        })
        par.forEach(function(parI){
            totalPar += parI;
        })
        return total - totalPar;

    }
}

module.exports = ScoreService;