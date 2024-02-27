let cal = document.getElementById('cal');

buttons = document.querySelectorAll('button');

let calValue = '';

for(item of buttons)
{
    item.addEventListener('click',(e) => {
        buttonText = e.target.innerText;
        console.log('Button Text is' , buttonText);

        if(buttonText == 'X')
        {
            buttonText = '*';
            calValue += buttonText;
            cal.value = calValue;
        }
        else if (buttonText == 'Clr')
        {
            calValue = "";
            cal.value = calvalue;
        }

        else if (buttonText == '=')
        {
            cal.value = eval(calValue);
        }

        else
        {
            calValue += buttonText;
            cal.value = calValue;
        }
        
    })
}