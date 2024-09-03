const myForm = document.querySelector('.myForm');
const containerInput = document.querySelectorAll('.container-input');
const labelRadio = document.querySelectorAll('.label-radio');
const result = document.querySelector('.result');


labelRadio.forEach( (item, index) => {
 
    item.addEventListener('change', () => {

        for(let i = 0; i < labelRadio.length; i++){

            if(i === index){
                labelRadio[i].style.background =  'hsla(148, 38%, 91%, 1)';
                labelRadio[i].style.border = '0.0625rem solid #0c7d69';
            }
            else{
                labelRadio[i].style.background =  '';
                labelRadio[i].style.border = '0.0625rem solid #86a2a5';
            }

        }
        
    });

});


myForm.addEventListener('submit', (e) => {

    document.querySelector('.result').style.display = '';

    for(let i = 0; i <= myForm.length-2; i++){

        if(!myForm[i].validity.valid && !myForm[i].checked){

            if(!myForm[i].parentElement.lastElementChild.classList.contains('error') && (i !== 3 && i !== 4))
            {

                const createSpanError = i !== 2 && i !== 6 ? `<span class="error">This field is required</span>` : `<span class="error">Please enter a valid email address</span>`; 
                myForm[i].parentElement.insertAdjacentHTML('beforeend', createSpanError);  
                myForm[i].style.border = '0.0625rem solid #d73c3c'; 

            }

            else if( (i === 3 || i === 4)){

                myForm[i].parentElement.style.border = '0.0625rem solid #d73c3c';

                if(!myForm[i].parentElement.parentElement.lastElementChild.classList.contains('error-radio')){

                    const createSpanError = `<span class="error-radio">This field is required</span>`

                    myForm[i].parentElement.parentElement.insertAdjacentHTML('beforeend', createSpanError);               
                }

            }

        }

        else if(!myForm[i].checked && i === 6){

            if(!myForm[i].parentElement.lastElementChild.classList.contains('error')){
                const createSpanError = `<span class="error">To submit this form, please consent to being contacted</span>`;
                myForm[i].parentElement.insertAdjacentHTML('beforeend', createSpanError);
                myForm[i].parentElement.lastElementChild.style.top = '2.4rem';
                myForm[i].parentElement.lastElementChild.style.left = '-1rem';
            }

        }
        

        else if(i === myForm.length-2 && (!myForm[0].validity.valid || !myForm[1].validity.valid || !myForm[2].validity.valid || (!myForm[3].validity.valid || !myForm[4].validity.valid) || !myForm[5].validity.valid || !myForm[6].checked)){

            break;

        }

        else{
     
            if(myForm[i].parentElement.lastElementChild.classList.contains('error') && (i !== 3 && i !== 4))
            {
                myForm[i].style.border = i !== 6 ? '0.0625rem solid #86a2a5' : '';
                myForm[i].parentElement.lastElementChild.remove();
            }

            else if(myForm[i].parentElement.parentElement.lastElementChild.classList.contains('error-radio') &&  (i === 3 || i === 4)){

                myForm[i].style.border = '0.0625rem solid #86a2a5';
                myForm[i].parentElement.parentElement.lastElementChild.remove();                    

            }

            if(i === myForm.length-2){

                document.querySelector('.result').style.display = 'block';

            }

        }
        
    }
    
    e.preventDefault();

});



myForm.addEventListener('reset', () => {

    labelRadio.forEach((item) => {

        document.querySelector('.result').style.display = '';
        item.style.background =  '';
        item.style.border = '0.0625rem solid #86a2a5';

    });

});


