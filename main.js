const accCont = document.querySelectorAll('.acc-link'); // The Accordion div

// Function

accCont.forEach( accord => {  // To loop over all the list

    accord.addEventListener('click', el => {


        accCont.forEach( item => { //loop over the list again to match between them and if clicked on the other one this close the current 

            if(item !== el.currentTarget) {

                item.classList.remove('active');
            }

        });

        accord.classList.toggle('active'); //opens the link when click on it

    })
});


