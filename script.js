let filed=document.getElementById("ss");
let checkpoint =[];
let out;
let i=0;
let resres=0;

    
    function one()
    {
        filed.value=1;
        checkpoint[i]=1;
                console.log(checkpoint[i],i);
        i++;
        
    }
    function two()
    {
        filed.value=2;
        checkpoint[i]=2;
                console.log(checkpoint[i],i);
        i++;
    }
    function three()
    {
        filed.value=3;
        checkpoint[i]=3;
                console.log(checkpoint[i],i);
        i++;
    }
    function four()
    {
        filed.value=4;
        checkpoint[i]=4;
                console.log(checkpoint[i],i);
        i++;
    }
    function five()
    {
        filed.value=5;
        checkpoint[i]=5;
                console.log(checkpoint[i],i);
        i++;
    }
    function six()
    {
        filed.value=6;
        checkpoint[i]=6;
                console.log(checkpoint[i],i);
        i++;
    }
    function seven()
    {
        filed.value=7;
        checkpoint[i]=7;
                console.log(checkpoint[i],i);
        i++;
    }
    function eight()
    {
        filed.value=8;
        checkpoint[i]=8;
                console.log(checkpoint[i],i);
        i++;
    }
    function nine()
    {
        filed.value=9;
        checkpoint[i]=9;
                console.log(checkpoint[i],i);
        i++;
    }
    function zero()
    {
        filed.value=0;
        checkpoint[i]=0;
                console.log(checkpoint[i],i);
        i++;
    }
    function point()
    {
        filed.value=".";
        checkpoint[i]=".";
                console.log(checkpoint[i],i);
        i++;
    }
    function plus()
    {
        filed.value="+";
        checkpoint[i]="+";
                console.log(checkpoint[i],i);
        i++;
    
    }
    function inus()
    {
        filed.value="-";
        checkpoint[i]="-";
                console.log(checkpoint[i],i);
        i++;
    }
    function mul()
    {
        filed.value="*";
        checkpoint[i]="*";
                console.log(checkpoint[i],i);
        i++;

    }
    function divi()
    {
        filed.value="/";
        checkpoint[i]="/";
                console.log(checkpoint[i],i);
        i++;
    }
    function clear()
    {
        filed.value=0;
        checkpoint=[];
        i=0;
        console.log("clicked");
    }

    function res()
    {
        filed.value="=";
  
        for (i=0 ; i < checkpoint.length ; i++)
            {   switch(checkpoint[i])
                {
                    case "*" :
                        resres=checkpoint[i-1]*checkpoint[i+1];
                        break;
                    case "/" :
                        resres=checkpoint[i-1]/checkpoint[i+1];
                            break;
                    case "+" :
                        resres=checkpoint[i-1]+checkpoint[i+1];
                        break;
                    case "-" :
                        resres=checkpoint[i-1]-checkpoint[i+1];
                        break;
                    
                }
                
            }
        filed.value=resres;
        checkpoint=[]; 
        i=0;

        checkpoint[i]=resres;
        i++;
        console.log("button finished functionning i = " ,i );
    }
 

