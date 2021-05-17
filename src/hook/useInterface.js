import {useState} from 'react'

export const useInterface = (inicial) => {
    const [state, setstate] = useState(inicial)

    if(inicial == true){
        const colorear = (color) => {
            document.querySelector('.q').style.backgroundColor = color;
        }
        
        window.addEventListener("keydown", function (event) {
        
            if (event.key == 'q') {
               console.log("la tecla q")
                colorear('red');
            }
            // console.log(event.key);
        }, false);
        
        window.addEventListener("keyup", function(event){
            if (event.key == 'q') {
                console.log("la tecla q")
                colorear('aqua');
             }
        }, false)
        
        // function prueba (){
        //     document.querySelector('.q').style.backgroundColor = 'red';
        // }
    }
    return{
        state,
        setstate
    }
}