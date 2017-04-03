var LinkedList = require('../js/LinkedList.js');

describe ('LinkedList', function(){
    var linkedList;
    beforeEach(function(){
        linkedList = new LinkedList();
    })
    describe ('insert',function(){
        it('should add a new item',function(){
            var ron = {name:'Ron'};
            var expected = linkedList.insert(ron);
            expect(linkedList)
        })
    })
    describe ('remove',function(){
        it('should remove an item',function(){

        })
    })
    describe ('find',function(){
        it('should find an item',function(){

        })
    })
})