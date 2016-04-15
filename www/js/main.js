$(function() {
	
	$("document").ready(function() {
	 $('.submit').trigger('click');
	});
	
		var AllfontImages = '';
		$.each(Allfonts,function(i,l){
			AllfontImages += '<img class="col-md-2 font_name_logo thumbnail"  id="'+Allfonts[i].font_name+'"  src="im/fonts/font_images/'+Allfonts[i].font_name+'.png" >';
		});
		
		$(".AllfontImages").html(AllfontImages);
	//$("AllfontImages")

	var myurl='http://www.srihost.com/im/im_'+$(".main_title").attr('id')+'.php';
		var to_send = {};
		$(".All_Input").change(function(){
			to_send[this.id] = $(this).val();
			
		});
		
	$(document).on('click', '#font_image', function (){
			$(".font_logos").show();
			$(".form_elements").hide();

	});
	$(document).on('click', '.font_name_logo', function (){
		var my_id=(this).id;
		$(".font_logos").hide();
		$(".form_elements").show();
		$("#font_image").attr("src","im/fonts/font_images/"+my_id+".png")
		$("#font").val(my_id);
		to_send['font_name'] = $('#font').val()+'.ttf';
		
		$.ajax({
		url: myurl,
		global: false, 
		type: "POST",
		dataType: "json",
		data: to_send,
		cache: false,
		beforeSend: function() {
			$('.previewArea').html("<img src='images/animated_loading.gif' />");
		},
		success: function(html) {

			$('.previewArea').html('<img src="'+html["file_location"]+'" />');
			$("#download").attr("href", html["file_location"]);
			$(".rrssb-whatsapp > a").attr("href", "whatsapp://send?text=Text Animator : http://srihost.com/ | http://www.srihost.com/"+html["file_location"]);
			
			
			$.each(html,function(i,l){
				$("#"+i).val(html[i]);
				
				if(i=='o_color' || i=='o_color1' || i=='o_color2' || i=='f_color' || i=='o_color3' || i=='f_color3' || i=='f_color2' || i=='f_color1' || i=='g_color1' || i=='g_color2' 
				|| i=='g_color3' || i=='g_color4' || i=='glow_color1' || i=='glow_color2' || i=='glow_color3' || i=='background_color')
				{
					$("#"+i).spectrum({
						preferredFormat: "hex",
						allowEmpty:false,
						clickoutFiresChange: true,
						color: $("#"+i).val()
					});
				}
				
			});

		},
		error: function(XMLHttpRequest, textStatus, errorThrown) { 
                    alert("Status: " + textStatus); alert("Error: " + errorThrown); 
                }   
		
		});

	});
	
	$('input[type="checkbox"][name="change"]').change(function() {
		if(this.checked) {
			$(".check_box").show();
		}
		else{
			$(".check_box").hide();
		}
	});
	
	$("#o_color,#o_color1,#o_color2, #f_color,#o_color3, #f_color3,#f_color2,#f_color1,#g_color1,#g_color2,#g_color3,#g_color4,#glow_color1,#glow_color2,#glow_color3,#background_color").spectrum({
		preferredFormat: "hex",
		allowEmpty:false,
		clickoutFiresChange: true
	});
	
	is_stopped=0;	
	 var spinner = $( "#t_size,#o_width,#o_width1,#jump_width,#o_width2,#o_width3,#image_width,#image_height,#jump_height,#glow_radius,#delay" ).TouchSpin({
		min: 0,
		step:1,
		max: 500,
	});

	
	
		
	/*$("#text,#text1,#text2,#text3").donetyping(function(){
		console.log(this.id);
		var to_send = {};
		to_send[this.id] = $("#"+this.id).val();							
		$.ajax({
		url: myurl,
		global: false, 
		type: "GET",
		dataType: "json",
		data: to_send,
		cache: false,
		beforeSend: function() {
			$('.previewArea').html("<img src='images/animated_loading.gif' />");
		},
		success: function(html) {
		  	$('.previewArea').html('<img src="'+html["file_location"]+'" />');
			$.each(html,function(i,l){
				$("#"+i).val(html[i]);
				
				if(i=='o_color' || i=='o_color1' || i=='o_color2' || i=='f_color' || i=='o_color3' || i=='f_color3' || i=='f_color2' || i=='f_color1' || i=='g_color1' || i=='g_color2' 
				|| i=='g_color3' || i=='g_color4' || i=='glow_color1' || i=='glow_color2' || i=='glow_color3' || i=='background_color')
				{
					$("#"+i).spectrum({
						color: $("#"+i).val()
					});
				}
				
			});

		}
		});
						
	});*/
	
	/*$('#text,#text1,#text2,#text3,#t_size,#o_width,#o_width1,#jump_width,#o_width2,#o_width3,#image_width,#image_height,#jump_height,#o_width,#glow_radius,#delay').each(function () {$(this).myajax({my_event:'focusout',my_url:myurl,my_data_title:$(this).attr("id"),my_div:'.previewArea'});});

	$('#text,#text1,#text2,#text3,#o_color,#o_color1,#o_color2,#o_color3, #f_color,#f_color2,#f_color1,#f_color3,#g_color1,#g_color2,#g_color3,#g_color4,#glow_color1,#glow_color2,#glow_color3,#background_color,#font,#circle,#t_size,#o_width,#o_width1,#jump_width,#o_width2,#o_width3,#image_width,#image_height,#jump_height,#glow_radius,#delay').each(function () {
		
		console.log($(this).attr("id"));
		
		});*/

		
		$(".submit").click(function(){
			console.log(to_send);
			$.ajax({
			url: myurl,
			global: false, 
			type: "POST",
			dataType: "json",
			data: to_send,
			cache: false,
			beforeSend: function() {
				$('.previewArea').html("<img src='images/animated_loading.gif' />");
			},
			success: function(html) {

				$('.previewArea').html('<img src="'+html["file_location"]+'" />');
				$("#download").attr("href", html["file_location"]);
				$(".rrssb-whatsapp > a").attr("href", "whatsapp://send?text=Text Animator : http://srihost.com/ | http://www.srihost.com/"+html["file_location"]);

				$.each(html,function(i,l){
					$("#"+i).val(html[i]);
					
					if(i=='o_color' || i=='o_color1' || i=='o_color2' || i=='f_color' || i=='o_color3' || i=='f_color3' || i=='f_color2' || i=='f_color1' || i=='g_color1' || i=='g_color2' 
					|| i=='g_color3' || i=='g_color4' || i=='glow_color1' || i=='glow_color2' || i=='glow_color3' || i=='background_color')
					{
						 console.log(i+".........."+$("#"+i).val());
						$("#"+i).spectrum({
							preferredFormat: "hex",
							allowEmpty:false,
							clickoutFiresChange: true,
							color: $("#"+i).val()
						});
					}
					
				});

			},
			error: function(XMLHttpRequest, textStatus, errorThrown) { 
						alert("Status: " + textStatus); alert("Error: " + errorThrown); 
					}   
			
			});
			
		})
		


});