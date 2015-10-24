function mission_List(id){
	$('#left_Pannel ul').find('li').removeClass('active');
	$('#left_Pannel ul li:eq(' + id + ')').addClass('active');

	var title = $('#left_Pannel ul li:eq(' + id + ')').text();
	console.log(title);
	$('#top_Pannel h1').text(title);
}

function tool_List(id){
	$('#top_Pannel ul').find('li').removeClass('active');
	$('#top_Pannel ul li:eq(' + id + ')').addClass('active');

	switch(id) {
    	case 0:
    	    $('#content_Planning, #content_Team, #content_Account').hide();
    	    $('#content_Todolist').show();
    	    break;
    	case 1:
    	    $('#content_Todolist, #content_Team, #content_Account').hide();
    	    $('#content_Planning').show();
    	    break;
    	case 2:
    	    $('#content_Planning, #content_Todolist, #content_Account').hide();
    	    $('#content_Team').show();
    	    break;
    	case 3:
    	    $('#content_Planning, #content_Todolist, #content_Team').hide();
    	    $('#content_Account').show();
    	    break;
	} 
}

function display_tooltype_Task(){
	$("#button_Float").toggleClass("active");
	$('#tooltype').toggle();
	$('#input_Name').val('');
	$('#input_Date').val('');
}

function priority_tooltype(id){
	$('#tooltype_priority').find('i').removeClass('active');
	$('#tooltype_priority i:eq(' + id + ')').addClass('active');
}


/*

Add_Mission

*/

function clear_input_mission(){
	$("#input_Mission").val('');
}

function save_input_mission(){
	var length = $('#left_Pannel ul > *').length;
	$("#input_Mission").parent().before('<li onclick="mission_List(' + (length - 1) + ');">' + $("#input_Mission").val() + '</li>');
	$("#input_Mission").val('');
	$('#input_Mission').blur();
}


/*


Todolist


*/

function toogle_today_task(){
	$('#content_Todolist .list_Today h3 i').toggleClass('active');
	$('.list_Today ul').toggle(200);
}
function today_task_done(id){
	$('#content_Todolist .list_Today ul li:eq(' + id + ') i').toggleClass('active');

	if($('#content_Todolist .list_Today ul li:eq(' + id + ') i').hasClass('active')){
		$('#content_Todolist .list_Today ul li:eq(' + id + ') i').html('&#xf058;');
	}else{
		$('#content_Todolist .list_Today ul li:eq(' + id + ') i').html('&#xf05d;');
	}
}

function toogle_upcomming_task(){
	$('#content_Todolist .list_Upcomming h3 i').toggleClass('active');
	$('.list_Upcomming ul').toggle(200);
}
function upcomming_task_done(id){
	$('#content_Todolist .list_Upcomming ul li:eq(' + id + ') i').toggleClass('active');

	if($('#content_Todolist .list_Upcomming ul li:eq(' + id + ') i').hasClass('active')){
		$('#content_Todolist .list_Upcomming ul li:eq(' + id + ') i').html('&#xf058;');
	}else{
		$('#content_Todolist .list_Upcomming ul li:eq(' + id + ') i').html('&#xf05d;');
	}	
}

function toogle_later_task(){
	$('#content_Todolist .list_Later h3 i').toggleClass('active');
	$('.list_Later ul').toggle(200);
}
function later_task_done(id){
	$('#content_Todolist .list_Later ul li:eq(' + id + ') i').toggleClass('active');

	if($('#content_Todolist .list_Later ul li:eq(' + id + ') i').hasClass('active')){
		$('#content_Todolist .list_Later ul li:eq(' + id + ') i').html('&#xf058;');
	}else{
		$('#content_Todolist .list_Later ul li:eq(' + id + ') i').html('&#xf05d;');
	}	
}


