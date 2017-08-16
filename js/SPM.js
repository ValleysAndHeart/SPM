



$(function(){
	$(".yonghu").hide();

	function denglu(){
		$(".yonghu h3")[0].innerHTML=sessionStorage.name;
		$("#signin1").hide();
		$("#signin2").hide();
		$('.yonghu').show();
	}

	function zhuxiao(){
		
		$("#signin1").show();
		$("#signin2").show();
		$('.yonghu').hide();
		
		delete sessionStorage.no;
	}

	if(sessionStorage.length>=4){
		denglu();
	}else{
		zhuxiao();
	}
	
	
	
	$("#denglu").click(function(){
		
		$.ajax({
			url:"UserManager",
			datatype:"json",
			type:"post",
			data:{
				functionID : "userLogin",
				userNo : $.trim($("#username").val()),
				userPwd : $.trim($("#password").val()),
				},
			success:function(data){
				
				
				var str=eval('(' + data + ')');
				
				
				sessionStorage.name=str.userName;
				sessionStorage.type=str.userType;
				sessionStorage.no=str.userNo;
				sessionStorage.bumen=str.userClass;

				denglu();

				}	
		});

		return false;
	});

	$(".yonghu #zhuxiao").click(function(){
		sessionStorage.name=null;
		sessionStorage.type=null;
		sessionStorage.no=0;

		zhuxiao();
		sessionStorage=null;
		alert(sessionStorage);
	});

	$("#geren").click(function() {
		/* Act on the event */
		if(sessionStorage<3){
			alert("请登录！");
			return false;
		}

	});

});