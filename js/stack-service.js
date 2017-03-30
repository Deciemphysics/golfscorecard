function Stack() {
    var container = [];
    this.push = function (input) {
        if (input != undefined) {
            container.push(input);
        }
    }
    this.peek = function () {
        return container[container.length - 1];
    }
    this.pop = function () {
        return container.pop();
    }
    this.size = function () {
        return container.length;
    }


}

module.exports = Stack;