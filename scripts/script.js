function sawSection (id){  
 document.getElementById(id).scrollIntoView({behavior: 'smooth'});

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

document.getElementById('apply').addEventListener('click' , function(){
    if(parseInt(document.getElementById('seat-count').innerText)>3){
        grandTotal('apply-coupon');
    }
    else{
        alert('To Get A Valid Coupon You Have To Purchase Atleast 4 tickets')
        return;
    }
})


function grandTotal (coupon){

    if(coupon){
        const couponCode = document.getElementById('coupon-fill').value ;
        if(couponCode === "NEW15"){
            const total = parseInt(document.getElementById('total-price').innerText);
            const discount = total * .15 ; 
            document.getElementById('discount-price').innerText = discount;
            document.getElementById('grand-total').innerText = total - discount ; 
            document.getElementById('coupon-fill-container').classList.add('hidden');
        }
        else if(couponCode === "Couple 20"){
            const total = parseInt(document.getElementById('total-price').innerText);
            const discount = total * .2 ; 
            document.getElementById('discount-price').innerText = discount;
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


document.getElementById('next-btn').addEventListener('click' , function(){
    const input = document.getElementById('phone-number');
    const seatCount = parseInt(document.getElementById('seat-count').innerText);
    if ( input && input.value && seatCount>0) {
        my_modal_1.showModal();
        document.getElementById('phone-number').value = "";
      }
    else if(input.value === ""  && seatCount>0){
                alert('Please Give The Phone Number');
                return;
    }
    else if(input.value && seatCount<1){
        alert('Please Select At least One Seat');
        return;
    }
    else{
        alert('Please Select At Least One Seat And Give The Phone Number.')
        return;
    }

})


