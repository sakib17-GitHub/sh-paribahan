function sawSection (){  
 document.getElementById("sh-paribahan").scrollIntoView({behavior: 'smooth'});

}

const allSeat = document.getElementsByClassName('seat');

for(const seat of allSeat){
    seat.addEventListener("click" , function(event){

        seat.setAttribute("disabled" , false);

        //set a limit to select seat
        const seatLimit = parseInt(document.getElementById('seat-count').innerText);
        if(seatLimit +1 > 4){
            alert("You Don't allow to select more than 4 seat's at a time")
            return;
        }

        seat.classList.add("bg-[#1DD100]");
        

        const seatName = event.target.innerText;

        const selectedSeatContainer = document.getElementById("selected-seat-container");

        const div = document.createElement("div");
        div.classList.add('flex');
        div.classList.add('justify-between');

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = seatName ; 
        p2.innerText = "Economy" ; 
        p3.innerText = parseInt(550);

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedSeatContainer.appendChild(div);



        // update seat-left and seat-count
        const seatLeft = parseInt(document.getElementById('seat-left').innerText);
        document.getElementById('seat-left').innerText = seatLeft - 1 ; 

        const seatCount = parseInt(document.getElementById('seat-count').innerText);
        document.getElementById('seat-count').innerText = seatCount + 1 ; 

        totalPrice ();
        grandTotal();


    })
}





function totalPrice (){
   const total = parseInt(document.getElementById('total-price').innerText);
    const sum = total + 550 ; 
    document.getElementById('total-price').innerText = sum ;  
}


function grandTotal (coupon){

    if(coupon){
        const couponCode = document.getElementById('coupon-fill').value ;
        if(couponCode === "NEW15"){
            const total = parseInt(document.getElementById('total-price').innerText);
            const discount = total * .15 ; 
            document.getElementById('grand-total').innerText = total - discount ; 
            document.getElementById('coupon-fill-container').classList.add('hidden');
        }
        else if(couponCode === "Couple 20"){
            const total = parseInt(document.getElementById('total-price').innerText);
            const discount = total * .2 ; 
            document.getElementById('grand-total').innerText = total - discount ;
            document.getElementById('coupon-fill-container').classList.add('hidden');
        }
        else{
            alert('Please Enter A Valid Coupon Code');
            document.getElementById('coupon-fill').value = "";
            
            
        }
    }
    else{
        const total = parseInt(document.getElementById('total-price').innerText);
        document.getElementById('grand-total').innerText = total ; 
    }
}
