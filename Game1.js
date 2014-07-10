(function(){
$(document).ready(function()
{	
	var elephant = {name:'elephant', source:"url('http://www.clker.com/cliparts/8/6/d/2/12161376851595770453lemmling_Cartoon_elephant.svg.hi.png')", bborder:'#ffc0cb', fborder:'#ff0000', sound:$("#elephant1")[0]};
	var tiger = {name:'tiger', source:"url('http://www.clipartlord.com/wp-content/uploads/2013/07/tiger4.png')", bborder:'#add8e6', fborder:'#0000ff', sound:$("#tiger1")[0]};
	var monkey = {name:'monkey', source:"url('http://sweetclipart.com/multisite/sweetclipart/files/monkey_with_banana.png')", bborder:'#98fb98', fborder:'#008000', sound:$("#monkey1")[0]};
	var snake = {name:'snake', source:"url('http://3.bp.blogspot.com/-YyVUBri5SJs/UiDFZAiHB7I/AAAAAAAAA-s/fbxppoYg-QE/s1600/cartoon-snake-clipart.jpg')", bborder:'#ffff90', fborder:'#ffff00', sound:$("#snake1")[0]};
	var crocodile = {name:'crocodile', source:"url('http://addison.typepad.com/.a/6a00d8341c1a9053ef01a73dd31b6f970d-pi')", bborder:'#dda0dd', fborder:'#800080', sound:$("#crocodile1")[0]};
	var animals = [elephant, elephant, tiger, tiger, monkey, monkey, snake, snake, crocodile, crocodile];
	var counter = "";
	var applause = $('#applause')[0];
	var Nellie = $('#Nellie1')[0];
	var starterimage = 'url("http://static.tumblr.com/264e223b77645f2705fa9cf2e310987c/jvsbomj/M60mpstkq/tumblr_static_question_mark.png")';
	var mixedanimals = [];
	var lastpress;
	var matchingcounter =0;
	while(animals.length>0)
	{
		var i = Math.floor(Math.random()*animals.length);
		mixedanimals.push(animals[i]);
		animals.splice(i,1);
	}
	for(var i=0; i<mixedanimals.length; i++)
	{
		mixedanimals[i].matched = false;
	}
	var fireworks = function()
	{	
		$(".imag").css("visibility", "hidden");
		$(".imag.elephant").css("visibility", "visible");
		$(".imag.elephant").each(function(j)
		{
			$(this).animate({top:"10%", left:"15%", height:"500px", width:"250px", backgroundSize:'100%'});
		})
		$(".imag.elephant").last().animate({left:"60%"});
		var Nellie = $('#Nellie1')[0];
		Nellie.play();
		for(var k=0; k<60; k++)
		{
			$(".imag.elephant").animate({top:"5%"});
			$(".imag.elephant").animate({top:"10%", left:"+=5%"});
			$(".imag.elephant").animate({top:"15%", left:"-=5%"});
			$(".imag.elephant").animate({top:"10%", left:"-=5%"});
			$(".imag.elephant").animate({top:"10%", left:"+=5%"});
		}
	}
	$(".imag").each(function(i)
	{
		$(this).css("border-color", mixedanimals[i].bborder);
		$(this).toggleClass(mixedanimals[i].name, true)
	});
	$(".imag").each(function(i)
	{
		$(this).mousedown(function()
		{
			if((counter === "") &&(mixedanimals[i].matched === false))
			{
			mixedanimals[i].sound.play();
			$(this).css("border-color", mixedanimals[i].fborder);
			$(this).css("background-image", mixedanimals[i].source);
			lastpress = i;
			counter = mixedanimals[i].name;
			}
			else if((counter === mixedanimals[i].name)&&(lastpress!==i))
			{
				mixedanimals[i].sound.play();
				$(this).css("border-color", mixedanimals[i].fborder);
				$(this).css("background-image", mixedanimals[i].source);
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
						matchingcounter = matchingcounter +1;
						if(mixedanimals.length===matchingcounter)
						{
						fireworks();
						}
					}
				});	
				lastpress = i;
				counter = "";
			}
			else if((counter === mixedanimals[i].name)&&(lastpress===i))
			{
				$(this).css("border-color", mixedanimals[i].bborder);
				$(this).css("background-image", starterimage);
				counter = "";
			}
			else
			{
				mixedanimals[i].sound.play();
				$(this).css("border-color", mixedanimals[i].fborder);
				$(this).css("background-image", mixedanimals[i].source);
				window.setTimeout(function()
				{
					$(".imag").each(function(j)
					{
						if(mixedanimals[j].matched == false)
						{
						$(this).css("border-color", mixedanimals[j].bborder);
						$(this).css("background-image", starterimage);
						}
					});
					counter = "";
				}, 2000);
			}
		});
		
	});
});

})();
