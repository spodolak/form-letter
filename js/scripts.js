$(document).ready(function()	{
	$("#formOne").submit(function()	{
		var name = $("input#name").val();

		$(".name").text(name);

		$("#letter").show();

		event.preventDefault();
	});
});