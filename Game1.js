(function(){
	$(document).ready(function()
{
		var elephant = {name:'elephant', source:'http://www.clker.com/cliparts/8/6/d/2/12161376851595770453lemmling_Cartoon_elephant.svg.hi.png', bborder:'#ffc0cb', fborder:'#ff0000', sound:$("#elephant1")[0]};
		var tiger = {name:'tiger', source:'http://www.clipartlord.com/wp-content/uploads/2013/07/tiger4.png', bborder:'#add8e6', fborder:'#0000ff', sound:$("#tiger1")[0]};
		var monkey = {name:'monkey', source:'http://sweetclipart.com/multisite/sweetclipart/files/monkey_with_banana.png', bborder:'#98fb98', fborder:'#008000', sound:$("#monkey1")[0]};
		var snake = {name:'snake', source:'http://3.bp.blogspot.com/-YyVUBri5SJs/UiDFZAiHB7I/AAAAAAAAA-s/fbxppoYg-QE/s1600/cartoon-snake-clipart.jpg', bborder:'#ffff90', fborder:'#ffff00', sound:$("#snake1")[0]};
		var crocodile = {name:'crocodile', source:'http://addison.typepad.com/.a/6a00d8341c1a9053ef01a73dd31b6f970d-pi', bborder:'#dda0dd', fborder:'#800080', sound:$("#crocodile1")[0]};
		var animals = [elephant, elephant, tiger, tiger, monkey, monkey, snake, snake, crocodile, crocodile];
		var counter = "";
		var applause = $('#applause')[0];
		var Nellie = $('#Nellie1')[0];
		var starterimage = "http://static.tumblr.com/264e223b77645f2705fa9cf2e310987c/jvsbomj/M60mpstkq/tumblr_static_question_mark.png"
		var mixedanimals = [];
		var placeholderimages = [];
	while(animals.length>0)
	{
		var i = Math.floor(Math.random()*animals.length);
		mixedanimals.push(animals[i]);
		animals.splice(i,1);
	}
	for(var i=0; i<mixedanimals.length; i++)
	{
		mixedanimals[i].matched = false;
		placeholderimages[i] = new Image();
		placeholderimages[i].src = mixedanimals[i].source;
	}
	$(".imag").each(function(i)
	{
		$(this).css("border-color", mixedanimals[i].bborder);
	});
	$(".imag").each(function(i)
	{
		$(this).click(function()
		{
			if(counter==="")
			{
			$(this).css("border-color", mixedanimals[i].fborder);
			$("img", this).attr("src", mixedanimals[i].source);
			counter = mixedanimals[i].name;
		//	mixedanimals[i].sound.play();
			}
			else if(counter === mixedanimals[i].name)
			{
				$(this).css("border-color", mixedanimals[i].fborder);
				$("img", this).attr("src", mixedanimals[i].source);
				if (counter === elephant.name)
				{
					Nellie.play();
				}
				else 
				{
					applause.play();
				}
				$(".imag").each(function(j)
				{
					if(mixedanimals[j].name === counter)
					{
						mixedanimals[j].matched = true;
					}
				});
				counter = "";
			}
			else
			{
				$(".imag").each(function(j)
				{
					if(mixedanimals[j].matched==false)
					{
					$(this).css("border-color", mixedanimals[j].bborder);
					$("img", this).attr("src", starterimage);
					}
					counter = "";
				});
			}
		});
	});
});
})();
