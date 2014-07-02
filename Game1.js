(function(){
	var animals = []
		var elephant = {name:'elephant', source:'http://www.clker.com/cliparts/8/6/d/2/12161376851595770453lemmling_Cartoon_elephant.svg.hi.png', bborder:'#ffc0cb', fborder:'#ff0000'};
		var tiger = {name:'tiger', source:'http://www.clipartlord.com/wp-content/uploads/2013/07/tiger4.png', bborder:'#add8e6', fborder:'#0000ff'};
		var monkey = {name:'monkey', source:'http://sweetclipart.com/multisite/sweetclipart/files/monkey_with_banana.png', bborder:'#98fb98', fborder:'#008000'};
		var snake = {name:'snake', source:'http://3.bp.blogspot.com/-YyVUBri5SJs/UiDFZAiHB7I/AAAAAAAAA-s/fbxppoYg-QE/s1600/cartoon-snake-clipart.jpg', bborder:'#ffffe0', fborder:'ffff00'};
		var crocodile = {name:'crocodile', source:'http://addison.typepad.com/.a/6a00d8341c1a9053ef01a73dd31b6f970d-pi', bborder:'#dda0dd', fborder:'#800080'};
	animals.push(elephant);animals.push(elephant); animals.push(tiger); animals.push(tiger); animals.push(monkey); animals.push(monkey); animals.push(snake); animals.push(snake); animals.push(crocodile); animals.push(crocodile);
		var mixedanimals = [];
	while(animals.length>0)
	{
		var i = Math.floor(Math.random()*animals.length);
		mixedanimals.push(animals[i]);
		animals.splice(i,1);
	}
$(document).ready(function()
{
	$(".imag").each(function(i)
	{
		$("img", this).click(function()
		{
			$(this).attr("src", mixedanimals[i].source);
		});
	});
});
})();
