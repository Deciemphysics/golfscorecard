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
<<<<<<< HEAD
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
=======
            expect(linkedList.find('Ron')).toBe(ron);
        })
        it('should add an item in the correct spot',function(){
            var ron = {name:'Ron',id:42};
            var kyle = {name:'Kyle',id:13};
            var zach = {name:'Zach',id:56};
            linkedList.insert(ron);
            linkedList.insert(kyle);
            linkedList.insert(zach);
            expect(linkedList.find('Kyle')).toBe(kyle);
        })
        it('should run through the chain',function(){
            var ron = {name:'Ron',id:42};
            var kyle = {name:'Kyle',id:13};
            var zach = {name:'Zach',id:56};
            linkedList.insert(ron);
            linkedList.insert(kyle);
            linkedList.insert(zach);
            var expected = linkedList.find('Ron');
            expect(expected).toBe(ron);
        })
    })
    describe ('remove',function(){
        it('should remove an item',function(){
            var ron = {name:'Ron',id:42};
            var kyle = {name:'Kyle',id:13};
            var zach = {name:'Zach',id:56};
            linkedList.insert(ron);
            linkedList.insert(kyle);
            linkedList.insert(zach);
            linkedList.remove(13);
            expect(linkedList.find('Kyle')).toBe(null);
        })
        it('should maintain the rest of the list', function(){
            var ron = {name:'Ron',id:42};
            var kyle = {name:'Kyle',id:13};
            var zach = {name:'Zach',id:56};
            linkedList.insert(ron);
            linkedList.insert(kyle);
            linkedList.insert(zach);
            linkedList.remove(13);
            expect(linkedList.find('Ron')).toBe(ron);
        })
        it('should be able to remove the last item',function(){
            var ron = {name:'Ron',id:42};
            var kyle = {name:'Kyle',id:13};
            var zach = {name:'Zach',id:56};
            linkedList.insert(ron);
            linkedList.insert(kyle);
            linkedList.insert(zach);
            linkedList.remove(56);
            expect(linkedList.find('Zach')).toBe(null);
            expect(linkedList.find('Ron')).toBe(ron);

>>>>>>> 9e99413fc990270c8dcad9be268d3eb3a748d1af
        })
    })
    describe ('find',function(){
        it('should find an item',function(){
            var ron = {name:'Ron',id:42};
<<<<<<< HEAD
            var kyle = {name:'Kyle',id:24};
            linkedList.insert(ron);
            linkedList.insert(kyle);
            expect(linkedList.find('Kyle')).toBe(kyle);
=======
            var kyle = {name:'Kyle',id:13};
            var zach = {name:'Zach',id:56};
            linkedList.insert(ron);
            linkedList.insert(kyle);
            linkedList.insert(zach);
            expect(linkedList.find('Ron')).toBe(ron);
>>>>>>> 9e99413fc990270c8dcad9be268d3eb3a748d1af
        })
    })
})