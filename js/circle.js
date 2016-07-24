$(function(){
	$('.refresh').find('img').css({opacity:1});
	setTimeout(function(){
		 myScroll.refresh();
	},100);
	var myScroll = new IScroll('.list',{
		scrollbars:true,
		startY:-50
	});
	var type;
	myScroll.on('scrollEnd',function(){
		var direction=this.directionY;
        if(direction<0){
           type="down";
           myScroll.refresh();
        }
		 if(direction>0){
		 	type="up";
		 	myScroll.refresh();
		 	console.log(myScroll.y);
		 }
	})
				
	myScroll.on('refresh',function(){
		if(type=="down"){
		    this.scrollTo(0,-50);
		}
		if(type=="up"){
			if($('.list_scroll').height()<6000){
				var high=$('.list_scroll').height()-  (myScroll.y+$('.list').height());
		  	    if(high>0){
		  		add();
		  	}else{
		  		console.log("没有新内容");
		  	}
			}
		  	
		  	
		}
	})
	function add(){
		var str1=$('.list_con1').clone();
		var str2=$('.list_con2').clone();
		var str3=$('.list_con3').clone();
		var str4=$('.list_con4').clone();
		var str5=$('.list_con5').clone();
		$('.list_scroll').append(str1[0]);
		$('.list_scroll').append(str2[0]);
		$('.list_scroll').append(str3[0]);
		$('.list_scroll').append(str4[0]);
		$('.list_scroll').append(str5[0]);
	}
	
	//页面跳转
   /* var down=true;
	$(window).on('touchmove',function(){
		down=false;
	    $(window).on('touchend',function(){
	       down=true;
	    })
	})*/
	
	//绑定与解绑
	/*$('.list').bind('touchend','.right',function(event){
		$('.list_con').unbind("touchend")
		console.log("9");
	})*/
	
	
	//$('.list_scroll').bind('touchend','.list_con',function(e){
		//if(down){
			//window.location.href='circle_content.html';
		//}
		//e.stopPropagation();
	//})
	/*$('.list_con').on('tap',function(){
		window.location.href='circle_content.html';
	})*/
	$('.list_scroll').bind('tap','.list_con',function(){
		window.location.href='circle_content.html';
	})
})


