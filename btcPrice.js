var price = document.querySelector("#price");
var account = document.querySelector("#account");
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

checkPrice();

setInterval(checkPrice, 60000);

function checkPrice(){
	fetch(url)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		var btc = data.bpi.USD.rate_float.toFixed(2);
		price.innerText = "$" + btc + " USD";
		document.title = "$" + btc + " - Bitcoin Checker";

		var myAmt = (Number(btc)*(0.1167934)).toFixed(2);
		account.innerText = "$" + myAmt + " USD";

		if(myAmt < 1000) {
			account.style.color = "red";
		}
		else {
			account.style.color = "green";
		}
	});
}