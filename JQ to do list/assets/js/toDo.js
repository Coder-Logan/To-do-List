// check todos by click
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});
//click X to delet todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(750, function(){
		$(this).remove();
	});
	event.stopPropagation();
}); 

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");

		//creat new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus-square").click(function(){
	$("input[type='text']").fadeToggle(700);
})