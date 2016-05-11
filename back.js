function timeRefresh()
{
    x = 1;
 	var d = new Date()
 	var hour = d.getHours();
 	var minute = d.getMinutes();
 	var second = d.getSeconds();
 	
 	if (hour<=9) {hour = '0'+ hour};
 	if (minute<=9) {minute = '0'+ minute};
	if (second<=9) {second = '0'+ second};
	
 	var	backgroundColor = '#'+hour+minute+second;
	if(hour>12)
	{
	hour-=12;
	var textDisplay = hour+':'+minute+':'+second+'PM';
 	}
	else if(hour==12)
	{
	hour=12;
	var textDisplay = hour+':'+minute+':'+second+'PM';
 	}
	else
	{
	var textDisplay = hour+':'+minute+':'+second+'AM';
	}
    $("div.background").css("background-color", backgroundColor );
    $("p#para").text(textDisplay);
     
    setTimeout(timeRefresh, x*1000);
}
  
timeRefresh(); // execute function