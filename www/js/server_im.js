(function ($) {

  $.fn.myajax = function(options) {

   var random = Math.floor((Math.random()*125780)+1);
  
   var defaults = {
   my_event :"",
   my_url :"",
   my_data_title:"",
   my_method:"GET",
   my_div:".previewArea",
   }

	var settings = $.extend({}, defaults, options);
	return this.each(function(){
	
	    $(this).bind(options.my_event,function(event){

			var to_send = {};
			to_send[options.my_data_title] = $(this).val();
			to_send['random'] = random;
			$.ajax({
			url: options.my_url,
			global: false, 
			type: options.my_method,
			dataType: "json",
			data: to_send,
			cache: false,
			beforeSend: function() {

			$(options.my_div).html("<img src='images/animated_loading.gif' />");

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
		 
	    });
    });
    };
		
}(jQuery));