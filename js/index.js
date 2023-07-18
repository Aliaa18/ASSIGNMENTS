
var quotAuther=['Oscar Wilde' ,  'Frank Zappa' , 'Marcus Cicero' , 'Mae West'];
var quotes=['"Be yourself; everyone else is already taken."','"So many Books, so little time."','"A room without books is like a body without a soul."',
'"You only live once, but if you do it right, once is enough."'];


function randomQuote(){
    
    var num= Math.floor(Math.random()*quotAuther.length); 
    document.getElementById("quotes").innerHTML=( quotes[num]); 
    document.getElementById("quotAuther").innerHTML=("--" + quotAuther[num]); 
     var test=num;
    
}
     










