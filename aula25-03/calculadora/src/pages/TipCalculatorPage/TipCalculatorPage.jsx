import React, { useState } from "react";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import ResultDisplay from "../../components/ResultDisplay/ResultDisplay";
import style from "./TipCalculator.module.css";

function TipCalculator() {
    const [valorConta, setValorConta] = useState("");
    const [percentualGorjeta, setPercentualGorjeta] = useState("");
    const [resultado, setResultado] = useState("");

    const calcularGorjeta = () => {
        const valor = parseFloat(valorConta);
        const valorGorjeta = (valor * parseFloat(percentualGorjeta)) / 100;
        const total = valor + valorGorjeta;
        if(total){
          setResultado({ gorjeta: valorGorjeta.toFixed(2), total: total.toFixed(2) });  
        }else{
            setResultado("Erro ao calcular.")
        }
        
    }
    return (
        <>
            <div className={style.container}>
               <h1>Calculadora de Gorjeta</h1>
                <InputField
                    label="Valor da Conta:"
                    value={valorConta}
                    onChange={(e) => setValorConta(e.target.value)}
                />
                <InputField
                    label="Porcentagem da Gorjeta (%):"
                    value={percentualGorjeta}
                    onChange={(e) => setPercentualGorjeta(e.target.value)}
                />
                <Button
                    text="Calcular" onCLick={calcularGorjeta}
                />
                
                { resultado && (<ResultDisplay gorjeta={resultado.gorjeta} total={resultado.total} />)}
                
                
            </div>
        </>
    )
}
export default TipCalculator;
