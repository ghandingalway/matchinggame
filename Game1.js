(function(){
$(document).ready(function()
{	
	var elephant = {name:'elephant', sound:$("#elephant1")[0], special:$('#Nellie1')[0]};
	var tiger = {name:'tiger', sound:$("#tiger1")[0]};
	var monkey = {name:'monkey', sound:$("#monkey1")[0]};
	var snake = {name:'snake', sound:$("#snake1")[0]};
	var crocodile = {name:'crocodile', sound:$("#crocodile1")[0]};
	var animals = [];
	var cow = {name:'cow', sound:$("#cow1")[0]};
	var horse = {name:'horse', sound:$("#horse1")[0]};
	var pig = {name:'pig', sound:$("#pig1")[0]};
	var chicken = {name:'chicken', sound:$("#chicken1")[0]};
	var duck = {name:'duck', sound:$("#duck1")[0], special:$("#FiveDucks")[0]};
	var counter = "";
	var applause = $('#applause')[0];
	var mixedanimals = [];
	var lastpress;
	var matchingcounter =0;
	var begin = function(animal1, animal2, animal3, animal4, animal5)
	{
		if(mixedanimals.length){
		$(".imag").each(function(i){
			$(this).toggleClass(mixedanimals[i].name, false);
		});
		}
		counter = "";
		mixedanimals = [];
		matchingcounter = 0;
		lastpress = "";
		animals = [animal1, animal1, animal2, animal2, animal3, animal3, animal4, animal4, animal5, animal5];
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
		$(".imag").each(function(i)
		{
				$(this).toggleClass("facedown", true);
			$(this).toggleClass(mixedanimals[i].name, true);
			$(".imag").css("visibility", "visible");
		});
	}
	begin(cow, horse, pig, chicken, duck);
	var fireworks = function()
	{	
		var fireworking = function(spec, name, location)
		{
			$(".imag").css("visibility", "hidden");
			$(".imag."+name).css("visibility", "visible");
			$(".imag."+name).first().toggleClass("fireworks1", true);
			$(".imag."+name).last().toggleClass("fireworks2", true);
			spec.play();
			var l=0;
			for(var k=0; k<10;k++)
			{
				$(".imag."+name).animate({top:"5%"});
				$(".imag."+name).animate({top:"10%", left:"+=5%"});
				$(".imag."+name).animate({top:"15%", left:"-=5%"});
				$(".imag."+name).animate({top:"10%", left:"-=5%"});
				$(".imag."+name).animate({top:"10%", left:"+=5%"}, 500,
			function(){
				l++;
				if (l>19){
			{	
				$(".imag").stop(true, true);
				$(".imag."+name).first().toggleClass("fireworks1", false);
				$(".imag."+name).first().css("top", "");
				$(".imag."+name).first().css("left", "");
				$(".imag."+name).last().toggleClass("fireworks2", false);
				$(".imag."+name).last().css("top","");
				$(".imag."+name).last().css("left", "");
				//spec.pause();
				begin(elephant, tiger, monkey, snake, crocodile);}
				}});}
					
		}
		var check = false;
		for(var j=0; j<mixedanimals.length; j++)
		{
			if(mixedanimals[j].special && check ===true)
			{
				fireworking(mixedanimals[j].special, mixedanimals[j].name);		
			}
			else if(mixedanimals[j].special && check===false)
			{
				check = true;
			}
		}
	}
	
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
			counter = mixedanimals[i];
			}
			else if((counter.name === mixedanimals[i].name)&&(lastpress!==i))
			{
				mixedanimals[i].sound.play();
				$(this).toggleClass('facedown', false);
				if (mixedanimals[i].special)
				{
					mixedanimals[i].special.play();
				}
				else 
				{
					applause.play();
				}
				$(".imag").each(function(j)
				{
					if(mixedanimals[j].name === counter.name)
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
			else if((counter.name === mixedanimals[i].name)&&(lastpress===i))
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
	$("button").click(function(){
	begin(elephant, tiger, monkey, snake, crocodile);
});
});

})();
