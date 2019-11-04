// function search_clues() { 
    // let input = document.getElementById('searchbar').value 
    // input=input.toLowerCase(); 
    // let x = document.getElementsByClassName('clues'); 
      
    // for (i = 0; i < x.length; i++) {  
        // if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            // x[i].style.display="none"; 
        // } 
        // else { 
            // x[i].style.display="list-item";                  
        // } 
    // } 
// } 

loadJSON("http://jservice.io/api/clues", gotData)
function gotData(data)
{
	println(data);
}