function jsUcfirst(string) 
{ 
	var chaine = "hello world";
    console.log(chaine.charAt(0).toUpperCase() + chaine.slice(1));
}


function capitalize(){
	var chaine = "hello world";
	var tab = chaine.split(" ");
	var tab1= [];
	for(t of tab){
		var a= t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()
		tab1.push(a);
	}
	var result= tab1.join(" ");
	console.log(result);


}

function camelCase(){
	var chaine = "hello world";
	var tab = chaine.split(" ");
	var tab1= [];
	for(t of tab){
		var a= t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()
		tab1.push(a);
	}
	var result= tab1.join("");
	console.log(result);
}

function yoda(){
	var chaine = "Hello world";
	var yoda= chaine.split(' ').reverse().join(' ');
	console.log(yoda);
}
