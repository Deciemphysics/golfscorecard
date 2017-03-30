var Stack = require('../js/stack-service.js');

describe('Stack', function () {
    var stack;
    beforeEach(function () {
        stack = new Stack();
    })
    describe('push', function () {
        it('should increase the size of the stack by 1', function () {
            stack.push('string');
            expect(stack.size()).toBe(1);
        })
        it('the last element should be at the top of the stack', function () {
            var str = 'string'
            stack.push('orange');
            stack.push(str);
            expect(stack.peek()).toEqual(str);
        })
        it('should not change the stack if an empty push is put in', function () {
            stack.push('string');
            stack.push();
            expect(stack.size()).toBe(1);
        })
    })
    describe('peek', function () {
        it('should return the item on the top of the stack', function () {
            var str = 'string'
            stack.push('orange');
            stack.push(str);
            var peeked = stack.peek();
            expect(peeked).toEqual(str);
        })
        it('should not change the length of the stack', function () {
            stack.push("string");
            stack.peek();
            expect(stack.size()).toBe(1);
        })
        it('should return the same value of pop', function () {
            var str = "string";
            stack.push(str);
            var peeked = stack.peek();
            expect(peeked).toEqual(stack.pop());
        })
    })
    describe('pop', function () {
        it('should return the top item of a stack', function () {
            var str = 'string'
            stack.push('orange');
            stack.push(str);
            var popped = stack.pop();
            expect(popped).toEqual(str);
        })
        it('should decrement the size by 1', function () {
            stack.push('orange');
            stack.push('string');
            stack.pop();
            expect(stack.size()).toBe(1);
        })
        it('should return the same value as peek', function () {
            var str = 'string';
            stack.push(str);
            var peeked = stack.peek();
            var popped = stack.pop();
            expect(popped).toEqual(peeked);
        })
        it('should return undefined when you pop an empty stack', function () {
            expect(stack.pop()).toBe(undefined);
        })
    })
    describe('size', function () {
        it('should return the size of the stack', function () {
            stack.push('string');
            expect(stack.size()).toBe(1);
        })
        it('should not affect the stack', function () {
            var str = 'string';
            stack.push(str);
            stack.size();
            expect(stack.peek()).toEqual(str);
        })
        it('should return zero when there is an empty stack', function () {
            expect(stack.size()).toBe(0);
        })
    })
})