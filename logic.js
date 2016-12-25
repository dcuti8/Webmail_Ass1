/* logic.js */

var status;// 记住以什么排序

function refreshView() {
  // get the messages a-1
  var M = messages.getMessages();

  
  // clears the table body of table#mlist before adding rows a-2
  $('table#mlist tbody').empty();
	
	if(status =="from") {
      //sort by from
      M.data.sort((a,b)=>{
        if(a.from < b.from) return -1;
        if(a.from > b.from) return 1;
        return 0;
      });
    }
    if(status =="received") {
      //sort by received
      M.data.sort((a,b)=>{
        if(a.received > b.received) return -1;
        if(a.received < b.received) return 1;
        return 0;
      });
    }

  // displays the message information in table#mlist (p305 & p314 3-3) a-3   

    for (var r=0; r<M.data.length; r++) {

      // 
      var $trash = $('<img>').attr('src','trash.png');
      //save the primary key (id) of that email
      var id = M.data[r].id;

      //add the <tr> to tbody
      $('<tr>').html('').appendTo($('#mlist tbody')); 
      var $tr = $('tbody tr').eq(r); 
	  //=================================add the from <td> to the <tr>=================================
      $('<td>').html(M.data[r].from).appendTo($tr);
      
    //=================================add the attach <td> to the <tr>  (b)=================================
      if(M.data[r].attach == true){
      	$('<td>').html('<img src="clip.png"/>').appendTo($tr);
  	  }
  	  else
  	  {
  	  	$('<td>').html(M.data[r].attach).appendTo($tr);
  	  }
  	//=================================add the subject <td> to the <tr>================================= 
      $('<td>').html(M.data[r].subject).appendTo($tr);

    //=================================add the received <td> to the <tr>   (c)=================================
	    //get cunrrent date  (2-5)
	    var now = new Date();
	    //get the date of data[r]
	    var receivedDate =  new Date(M.data[r].received);
	    //format the 1 bit to two bits
	    var month = receivedDate.getMonth() + 1;
	    var date =  receivedDate.getDate();
	    var hour =  receivedDate.getHours();
	    var minute =  receivedDate.getMinutes();
	 	var twoBitMonth = month < 10 ? '0' + month : month; 
	 	var twoBitDate = date < 10 ? '0' + date : date; 
		var twoBitHour = hour < 10 ? '0' + hour : hour; 
		var twoBitMinute = minute < 10 ? '0' + minute : minute; 

		//show the english short form of month
		monName = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec") //getMonth()获得的是0-11

		//If the received time of a message is within today, show only minute and second. 
		if(receivedDate.getFullYear()== now.getFullYear() && receivedDate.getMonth() == now.getMonth() && receivedDate.getDate() == now.getDate())
		{
			$('<td>').html(twoBitHour +":"+twoBitMinute).appendTo($tr);
		}
		//If the received time is before today, but is within the current year, show only the month and day. 	
		else if (receivedDate < now && receivedDate.getFullYear()== now.getFullYear())
		{		
			$('<td>').html(monName[receivedDate.getMonth()] +" "+twoBitDate).appendTo($tr);
		}
		//Otherwise, show the date in dd/mm/yyyy format	
	 	else {
	      $('<td>').html(twoBitDate +"/"+ twoBitMonth +"/"+receivedDate.getFullYear()).appendTo($tr);
	 	}

    //=================================add the trash <td> to the <tr>=================================     
    
      // event handler handles 'mouseenter' , 'mouseleave' 3-2 ,3-4,p323
    $('<td>').append($trash).appendTo($tr); 
    $trash.attr({PK_id : id}); // 给垃圾桶加上id ，为了点击垃圾桶时读取当条email的id
    //(d)
    $trash.css("display","none");
		$('tr td:nth-child(5)').on('mouseenter', (event)=>$(event.target).children("img").css("display",""));
		$('tr td:nth-child(5)').on('mouseleave', (event)=>$(event.target).children("img").css("display","none"));
		
	}
	
    //p212  messages.deleteMessage(del_id)
    $('tbody tr td:nth-child(5)').children("img").on('click', (event) => {
    	var del_id = parseInt($(event.target).attr("PK_id"), 10);      
        messages.deleteMessage(del_id);    
        refreshView();
    });

 

      
}

//(h)
refreshView();

//给th加上css
$('th').css("padding","2px 6px").css("border","1px solid gray");


//(g) 2-4 
$('button#refresh').on('click', (event) => {
    refreshView();
});


$('tbody tr td:nth-child(5)').children("img").on('click', (event) => {
    console.log("sssss");
});


    //f Message sorting
    $('#col1').on('click', (event) =>{
      //f-1
      $('img[src*="sort"]').eq(0).css("display","");
      $('img[src*="sort"]').eq(1).css("display","none");  
      status = "from";
      //f-3 (2-4)  
      
      refreshView();
    });
   
    $('#col3').on('click', (event) =>{  
    //f-1    
      $('img[src*="sort"]').eq(1).css("display","");
      $('img[src*="sort"]').eq(0).css("display","none");  
      status = "received";
      //f-2 (2-4)   
      
      refreshView();
    });





//(i)  2-4 毫秒为单位 1s= 1000毫秒
var id = setInterval(function() {refreshView()}, 20000);

//f-5
//$('#col3').click();
$('#col3').trigger("click");



