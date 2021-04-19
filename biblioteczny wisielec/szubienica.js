var min = 1;
var max = 25;
var nk = Math.floor(Math.random()*(max-min+1)+min);
	
var tytul = new Array(25);

tytul[1] = "Ostatnie Życzenie";
tytul[2] = "Gra o Tron";
tytul[3] = "Metro";
tytul[4] = "Pan Lodowego Ogrodu";
tytul[5] = "Kroniki Jakuba Wędrowycza";
tytul[6] = "Morderstwo w Orient Expressie";
tytul[7] = "Macbeth";
tytul[8] = "Księżniczka z Lodu";
tytul[9] = "Śmierć w Breslau";
tytul[10] = "I nie było już nikogo";
tytul[11] = "Solaris";
tytul[12] = "Przebudzenie Lewiatana";
tytul[13] = "Gra Endera";
tytul[14] = "Autostopem przez galaktykę";
tytul[15] = "FUTURE";
tytul[16] = "Pamięć nieulotna";
tytul[17] = "Leonardo Da Vinci";
tytul[18] = "Sharon Tate Historia morderstwa żony Romana Polańskiego";
tytul[19] = "Biografia Agathy Christie";
tytul[20] = "Steve Jobs";
tytul[21] = "Felix Net i Nika oraz Gang Niewidzialnych Ludzi";
tytul[22] = "Czerwone Krzesło";
tytul[23] = "Baśniobór";
tytul[24] = "Złodziej Pioruna";
tytul[25] = "Tunele";

haslo = tytul[nk];

haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var ile_skuch = 0;

var win = new Audio("win.mp3");
var fail = new Audio("fail.mp3");

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";



function start()
{
	
	var tresc_diva ="";
	
	for (i=0; i<=34; i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
		if ((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	
	wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}


function sprawdz(nr)
{
	
	var trafiona = false;
	
	for(i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr]) 
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
	}
	
	if(trafiona == true)
	{
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		wypisz_haslo();
	}
	else
	{
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";	
		document.getElementById(element).setAttribute("onclick",";");		
		
		//skucha
		ile_skuch++;
		var obraz = "img/s"+ ile_skuch + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
	}
	
	//wygrana
	if (haslo == haslo1)
	{
		win.play();
		document.getElementById("alfabet").innerHTML  = "Brawo! Wygrana! <br /><br /> Podano prawidłowe hasło: <br /><br />"+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	}
	
	//przegrana
	if (ile_skuch>=9)
	{
		fail.play();
		document.getElementById("alfabet").innerHTML  = "Niestety! Przegrana!<br /><br /> Prawidłowe hasło: <br /><br />"+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	}
}
