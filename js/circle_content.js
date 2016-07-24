$(function(){
	
	
	$('.i1').bind('touchend',function(){
		window.history.back();
	})
	$('.refresh').find('img').css({opacity:1});
	//console.log("1");
	var type=null;
	var startY=$('.list01').height()-900;
	var myScroll = new IScroll('.list',{
		startY:-startY
	});
	setTimeout(function(){
		 myScroll.refresh();
	},100);
	 document.addEventListener('touchmove',function(e){
		e.preventDefault();
	},false);
	
	
	myScroll.on('scrollEnd',function(){
		 var direction=this.directionY;
		 if(direction<0){
		 	type="down";
		 	myScroll.refresh();
		 }
		 if(direction>0){
		 	type="up";
		 	myScroll.refresh();
		 	//console.log("1");
		 }
		 
	})
	myScroll.on('refresh',function(){
		if(type=="down"){
			this.scrollTo(0,-50);
		}
		if(type=="up"){
			this.scrollTo(0,$('.list').height()-$('.list01').height());
		}
	})
	
	//表情包
	$('.del').on('touchend',function(){
		$('.monkey').hide();
	})
	$('.span2').on('touchend',function(){
		$('.monkey').show();
	})
	
	
	$('.monkey').find('span').on('touchend',function(){
		var txt=$('#text').val();
		var url=$(this).attr('url');
	    var img='<img src="'+url+'"/>';
	   // $('.monkey').append(img);
	        txt+=img;
	       // console.log(txt);
	   $('#text').val(txt);
	})
	
	
	
	//信息发送
	var n=0;
	$('#send').on('touchend',function(){
		
		n++;
		var str=$('#text').val();
		//console.log(str);
		var str1=$('<div class="list_scroll   list_scroll'+n+'"></div>');
		//console.log($(str1).height());
		$('.list01').append(str1);
		var str2=$('<div class="left_r"><img src="../img/cricle_14.png"/></div>');
		$(str1).append(str2);
		var str3=$('<div class="right_r"></div>');
		$(str1).append(str3);
		var str4=$('<p class="p1">'+str+'</p>');
		var str5=$('<div class="san1"></div>');
		$(str3).append(str4);
		$(str3).append(str5);
		myScroll.refresh();
		myScroll.scrollTo(0,$('.list').height()-$('.list01').height(),100,IScroll.utils.ease.bounce);
		$('#text').val('');
	})
	
})


