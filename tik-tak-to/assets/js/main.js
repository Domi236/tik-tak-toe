    
    var turn = document.getElementById("turn");
    var fields = document.querySelectorAll(".field");
    var X_or_O = 0;
    var field1 = document.getElementById("field1");
        field2 = document.getElementById("field2"),
        field3 = document.getElementById("field3"),
        field4 = document.getElementById("field4"),
        field5 = document.getElementById("field5"),
        field6 = document.getElementById("field6"),
        field7 = document.getElementById("field7"),
        field8 = document.getElementById("field8"),
        field9 = document.getElementById("field9");

    document.getElementById("tik-tak-to__replay-btn").addEventListener("click", function playAgain() {
        for(let i = 0; i < fields.length; i++){
            fields[i].classList.remove("win");
            fields[i].innerHTML = "";
            turn.innerHTML = "Play";
            turn.style.fontSize = "50px";
        }
    });
    
    for(let i = 0; i < fields.length; i++){
        fields[i].onclick = function(){
            if(this.innerHTML !== "X" && this.innerHTML !== "O"){
                if(X_or_O % 2 === 0){
                    this.innerHTML = "X"; 
                    turn.innerHTML = "O Turn Now";
                    getWinner();
                    X_or_O += 1;
                    
                }else{
                this.innerHTML = "O";
                turn.innerHTML = "X Turn Now";
                getWinner();
                X_or_O += 1;  
                }
            }
        };
    }
    
    function getWinner(){
    
        if(field1.innerHTML !== "" && field1.innerHTML === field2.innerHTML && field1.innerHTML === field3.innerHTML) {
            selectWinnerfields(field1,field2,field3);
        }
    
        if(field4.innerHTML !== "" && field4.innerHTML === field5.innerHTML && field4.innerHTML === field6.innerHTML) {
            selectWinnerfields(field4,field5,field6);
        }
        
        if(field7.innerHTML !== "" && field7.innerHTML === field8.innerHTML && field7.innerHTML === field9.innerHTML) {
            selectWinnerfields(field7,field8,field9);
        }
        
        if(field1.innerHTML !== "" && field1.innerHTML === field4.innerHTML && field1.innerHTML === field7.innerHTML) {
            selectWinnerfields(field1,field4,field7);
        }
        
        if(field2.innerHTML !== "" && field2.innerHTML === field5.innerHTML && field2.innerHTML === field8.innerHTML) {
            selectWinnerfields(field2,field5,field8);
        }
        
        if(field3.innerHTML !== "" && field3.innerHTML === field6.innerHTML && field3.innerHTML === field9.innerHTML) {
            selectWinnerfields(field3,field6,field9);
        }
        
        if(field1.innerHTML !== "" && field1.innerHTML === field5.innerHTML && field1.innerHTML === field9.innerHTML) {
            selectWinnerfields(field1,field5,field9);
        }
        
        if(field3.innerHTML !== "" && field3.innerHTML === field5.innerHTML && field3.innerHTML === field7.innerHTML) {
            selectWinnerfields(field3,field5,field7);
        }
    }

    function selectWinnerfields(field1,field2,field3){
        field1.classList.add("win");
        field2.classList.add("win");
        field3.classList.add("win");
        turn.innerHTML = field1.innerHTML + " Gratulation";
        turn.style.fontSize = "80px";
    }
