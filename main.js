/* Set the width of the side navigation to 250px */
function openNav() {
	var x =  document.getElementById("mySidenav");
    
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
} 


// Get login module
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// create sticky note
function createNotes() {
    var div = document.createElement('div');
    document.getElementById('note-title').innerHTML; = document.getElementById('title').value;
    document.getElementById('note-text').innerHTML; = document.getElementById('list-text').value;
    document.body.appendChild(div);
  }