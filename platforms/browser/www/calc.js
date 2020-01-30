function ras4et()
{
	var a = parseFloat(document.getElementById('t1').value);
	var b = parseFloat(document.getElementById('t2').value);	
	
	var c = (Math.floor((a/(1.013 - (0.0267123 * b)))* 10))/10;
	if (isNaN(c)) alert('Введены некорректные данные');
	else
	if (c<0) alert('Некорректно большое кол-во повторений');
	else document.getElementById('total').value=c+ ' кг';
}

function ras4et1()
{
	var a = parseFloat(document.getElementById('t3').value);
	var b = parseFloat(document.getElementById('t4').value);
	
	var c = Math.floor((1.013-(b/a))/0.0267123);
	if (isNaN(c)) alert('Введите корректные данные');
	else
	if (c<0) alert('Введены некорректные данные');
	else document.getElementById('total1').value=c+ ' повтор.';
}

function ras4et2()
{
	var a = parseFloat(document.getElementById('t5').value);
	var b = parseFloat(document.getElementById('t6').value);
	
	var c = (Math.floor((a*(1.013-0.0267123*b))* 10))/10;
	if (isNaN(c)) alert('Введены некорректные данные');
	else
	if (c<0) alert('Некорректно большое кол-во повторений');
	else document.getElementById('total2').value=c+ ' кг';
}
