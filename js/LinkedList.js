function LinkedList(){
    var head = null;
    this.length = 0;
    this.insert = insert;
    this.remove = remove;
    this.find = find;

    function insert( data ){ // What do we store the data in?
        //let node = head;
        var ins = new Node( data );
        if (head){
            let node = head;
            let prev = null;
            while(node && node.data.name.toLowerCase() < ins.data.name.toLowerCase()){
                prev = node;
                node = node.next;
                this.length++;
            }
            if ( prev == null ){
                head = ins;
                ins.next = node;
                this.length++;
            }
            else if ( node == null){
                prev.next = ins;
            } else if (node.data.name.toLowerCase() != ins.data.name.toLowerCase()){
                prev.next = ins;
                ins.next = node;
                this.length++;
            } 
        } else {
            head = ins;
            this.length++;
        }
    }
        //  while (node != null && node.next != null && node.next.data.name.toLowerCase() < ins.data.name.toLowerCase() ){
        //     node = node.next;
        // }
        // if (node && node.next){
        //     if ( node.next.data.name != ins.data.name){
        //         ins.next = node.next;
        //         node.next = ins;
        //         this.length++;
        //     }
        // } else if ( node ){
        //     if (node.data.name != ins.data.name){
        //         if(node.data.name.toLowerCase() < ins.data.name.toLowerCase()){
        //         node.next = ins;
        //         this.length++;
        //         } else {
        //             ins.next = node;
        //             this.head = ins;
        //             this.length++;
        //         }
        //     }
        // }
        // else { 
        //     head = ins;
        //     this.length++;
        // }


    function remove( id ){
        let node = head;
        let prev = null;
        while(node != null && node.data.id != id){
            prev = node;
            node = node.next;
        }
        if (node && prev != null){
            prev.next = node.next;
            this.length--
        } else if (node && prev == null){
            node = null;
            this.length--
        }

    }
    function find( name ){
        let node = head;
        while(node != null && node.data.name != name){
            node = node.next;
        }
        return node ? node.data : null;
           
    }
    function Node( data ){
        this.next = null;
        this.data = data;
    }
}

module.exports = LinkedList;