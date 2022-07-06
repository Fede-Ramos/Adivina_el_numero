import React, { useState, useEffect } from 'react';

export function GameForm () {
    var min= 0;
    var max= 100;
    const initialState= Math.floor(Math.random() * max - min + 1) + min;
    const [ input, setInput ]= useState({search: ''});
    const [ intentos, setIntentos ]= useState(0);
    const [ aleatorio, setAleatorio ]= useState(initialState);

    const onSubmit = () => {
    var numero= parseInt(input.search);
    if(numero >= min && numero <= max) {
        if(intentos < 5){
            setIntentos(intentos +1);
            if(numero > aleatorio){
                alert("El número ingresado es mayor");
                return
            }
            if(numero < aleatorio){
                alert("El número ingresado es menor");
                return
            }
            if(numero === aleatorio){
                alert("Felicidades, acertaste!!");
                return
            } 
        }
         alert("Haz alcanzado el número de intentos permitidos")
         return
    }
        alert("El número debe ser entre 0 y 100")
        return
    };
    

    const onChange = ({target}) => {
        setInput({
            ...input,
            [target.name]: target.value
        });
    };

    const onRestart = () => {
        setIntentos(0);
        setAleatorio(initialState);
        setInput({
            search: ''
        });
    };

    useEffect(() => {
        console.log(aleatorio)
        console.log(intentos)
        console.log(input)
    })


    return (
        
    <div>
            <input  type="number"
                    name="search"
                    value={input.search}
                    required="true"
                    className="input"
                    placeholder="ingrese un valor..."
                    onChange={onChange}/>

            <button onClick={onSubmit}>Buscar</button>

            <button onClick={onRestart}>Reiniciar Juego</button>

    </div>
    )
};