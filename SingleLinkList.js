//Program to create a linklist,add node to it and print the contents of the single link list.


function SingleLinkList()
{	
	this.length = 0;
	this.head = null;
};


SingleLinkList.prototype = {
	//function to add elements to linklist
		add:function(value){
		var node = {
			data: value,
			next: null
		}
		if(this.head==null){
			this.head = node;
			this.length++;
			return;
		}else{
			var cur = this.head;
			while(cur.next!=null){
				cur = cur.next;
			}
			cur.next = node;
			this.length =this.length+1;
		}
	},
	
	//function to print the contents of the link list.
	PrintContents: function(){
        if (this.head == null)
			return;
        var cur = this.head
		var position = 1;
        while(cur.next != null){
		
            console.log('The element at position ' + position + ' has value ' + cur.value);
            cur = cur.next;
            position= position+1;
        
		}
        // printing the last element
        console.log('The element at position ' + position + ' has value ' + cur.value);
     }
 
	
}



var SingleLL = new SingleLinkList();
SingleLL.add('Apple');
SingleLL.add('Orange');
SingleLL.add('Banana');
SingleLL.add('Pineapple');
SingleLL.add('Tomato');   
 
console.log('After adding 5 elements ');

SingleLL.PrintContents(); 
