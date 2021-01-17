var contacts = document.getElementById("contacts");
var gifts = document.getElementById("gifts");
var submit = document.getElementById("submit");
var result = document.getElementById("result");

submit.addEventListener("click", function(){

    var counter = 0;
    var contactsArray = [];
    var giftsArray = [];
    var resultArray = [];       

    if(contacts.value != "" && gifts.value != "")
    {
        var cArray = contacts.value.split(',');
        cArray.forEach(element => {
            contactsArray.push(element);
        });

        var gArray = gifts.value.split(',');

        gArray.forEach(element => {
            giftsArray.push(element);
        });

        if(contactsArray.length >= giftsArray.length)
        {                       
            for(var i=giftsArray.length-1; i>=0; i--){
                
                var cRandom = Math.floor(Math.random()*contactsArray.length)+0;
                var gRandom = Math.floor(Math.random()*giftsArray.length)+0;
                resultArray.push(contactsArray[cRandom]+" >>> "+giftsArray[gRandom]);
                contactsArray.splice(cRandom,1);
                giftsArray.splice(gRandom,1);  

            }
                               
            resultArray.forEach(element => {

                var results = document.createElement("div");
                var resultCard = document.createElement("div");

                results.classList.add("col-12","col-md-4","col-lg-3");
                results.id="resultContainer";
                result.appendChild(results);

                var resultContainer = document.querySelectorAll("#resultContainer")[counter];
                resultCard.classList.add("card");
                resultCard.textContent = element;
                resultContainer.appendChild(resultCard);
                counter++;
                            
            });        
            
            contacts.value="";
            gifts.value="";  
                        
        }        
        else alert("Kişi Sayısı Hediyelerin Sayısından Az Olamaz...!");        
            
    }

    else alert("Kişiler ve Hediyeler Alanı Boş Olamaz...!");
});