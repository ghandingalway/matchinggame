(function(){
$(document).ready(function()
{	
	var elephant = {name:'elephant', sound:$("#elephant1")[0]};
	var tiger = {name:'tiger', sound:$("#tiger1")[0]};
	var monkey = {name:'monkey', sound:$("#monkey1")[0]};
	var snake = {name:'snake', sound:$("#snake1")[0]};
	var crocodile = {name:'crocodile', sound:$("#crocodile1")[0]};
	var animals = [elephant, elephant, tiger, tiger, monkey, monkey, snake, snake, crocodile, crocodile];
	var cow = {name:'cow', sound:$('#cow1')[0]};
	var horse = {name:'horse', sound:$('#horse1')[0]};
	var pig = {name:'pig', sound:$('#pig1')[0]};
	var chicken = {name:'chicken', sound:$('#chicken1')[0]};
	var duck = {name:'duck', sound:$('#duck1')[0]};
	var counter = "";
	var applause = $('#applause')[0];
	var Nellie = $('#Nellie1')[0];
	var FiveDucks = $('#FiveDucks')[0];
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
		$(".imag.elephant").each().toggleClass("fireworks");
		$(".imag.elephant").first().animate({left:"15%"});
		$(".imag.elephant").last().animate({left:"60%"});
		var Nellie = $('#Nellie1')[0];
	//	Nellie.play();
		for(var k=0; k<30; k++)
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
		$(this).toggleClass(mixedanimals[i].name, true)
	});
	$(".imag").each(function(i)
	{
		$(this).mousedown(function()
		{
			if(mixedanimals[i].matched === true)
			{
				return;
			}
			else if((counter === "") &&(mixedanimals[i].matched === false))
			{
			mixedanimals[i].sound.play();
			$(this).toggleClass('facedown', false);
			lastpress = i;
			counter = mixedanimals[i].name;
			}
			else if((counter === mixedanimals[i].name)&&(lastpress!==i))
			{
				mixedanimals[i].sound.play();
				$(this).toggleClass('facedown', false);
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
				$(this).toggleClass('facedown', true);
				counter = "";
			}
			else
			{
				mixedanimals[i].sound.play();
				$(this).toggleClass('facedown', false)
				window.setTimeout(function()
				{
					$(".imag").each(function(j)
					{
						if(mixedanimals[j].matched == false)
						{
						$(this).toggleClass('facedown', true);
						}
					});
					counter = "";
				}, 2000);
			}
		});
		
	});
});

})();
