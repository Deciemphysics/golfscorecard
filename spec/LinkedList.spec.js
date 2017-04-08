var LinkedList = require('../js/LinkedList.js');

describe ('LinkedList', function(){
    var linkedList;
    beforeEach(function(){
        linkedList = new LinkedList();
    })
    describe ('insert',function(){
        it('should add a new item to and empty instance and have that be the first',function(){ // Yeah this isnt a good test
            var ron = {name:'Ron'};
            linkedList.insert(ron);
            expect(linkedList.head).toBe(ron);
        })
        it('should be able to alphabetize stuff',function(){ // these test suck okay
            var ron = {name:'Ron'};
            var kyle = {name:'Kyle'};
            var zach = {name:'Zach'};
            linkedList.insert(ron);
            linkedList.insert(kyle);
            linkedList.insert(zach);
            expect(linkedList.head).toBe(kyle);
        })
    })
    describe ('remove',function(){
        it('should remove an item based on id',function(){
            var ron = {name:'Ron',id:42};
            var kyle = {name:'Kyle',id:24};
            linkedList.insert(ron);
            linkedList.insert(kyle);
            likedList.remove(24);
            expect(linkedList.head).toBe(ron);
        })
    })
    describe ('find',function(){
        it('should find an item',function(){
            var ron = {name:'Ron',id:42};
            var kyle = {name:'Kyle',id:24};
            linkedList.insert(ron);
            linkedList.insert(kyle);
            expect(linkedList.find('Kyle')).toBe(kyle);
        })
    })
})