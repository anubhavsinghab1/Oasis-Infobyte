const btn=document.getElementById('button');
btn.addEventListener('click',convert=()=>{

        let fromUnit=document.getElementById('from').value;
        let toUnit=document.getElementById('to').value;
        
        let input=parseFloat(document.getElementById('input').value);

        let convertedValue;

        switch(fromUnit){
            case 'c':
                if(toUnit==='f'){
                    convertedValue=9*input/5+32;
                }
                else if(toUnit==='k'){
                    convertedValue=input+273;
                }
                else{
                    convertedValue=input;
                }
                break;
            case 'f':
                if(toUnit==='c'){
                    convertedValue=(input-32)/5*9;
                }
                else if(toUnit==='k'){
                    convertedValue=(input-32)/5*9+273;
                }
                else{
                    convertedValue=input;
                }
                break;
            case 'k':
                if(toUnit==='f'){
                    convertedValue=(input-32)/5*9-273;
                }
                else if(toUnit==='c'){
                    convertedValue=input-273;
                }
                else{
                    convertedValue=input;
                }
                break;
            }

            let result=document.getElementById('result');
            result.value=convertedValue;
        }
); 