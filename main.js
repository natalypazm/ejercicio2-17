
function calcular()
{
	var vacation = document.getElementById("vacaciones").value;
	var weekday = parseInt(document.getElementById("dia").value);

	var isVacation = true;
	var isWeekday = false;

	var salida = document.getElementById("salida");

	if(vacation == "1")
	{
		isVacation = false;
	}

	if(weekday < 6)
	{
		isWeekday = true;
	}

	if(isVacation)
	{
		salida.innerHTML = "0(no)";
	}else{
		if(isWeekday)
		{
			salida.innerHTML = "1(si)";
		}else{
			salida.innerHTML = "0(no)";
		}
	}
}