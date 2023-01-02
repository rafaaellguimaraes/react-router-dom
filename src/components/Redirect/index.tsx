import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

//Função que me redireciona para alguma pagina apos acabar o tempo
export const Redirect = () => {
    const [time, setTime] = useState(3)
    const timeout = useRef(0)
    //Navigate recebe as props de useNavigate
    const navigate = useNavigate();
    //useEffect para fazer um timeout do tempo, onde vamos dar um clear primeiro, e depois fazer com que o timeout.current receba um setTimeout subtraindo -1, quando terminar ele me redireciona para uma rota específica
    useEffect(() => {
        clearTimeout(timeout.current)
        timeout.current = setTimeout(() => {
            setTime((t) => t - 1)
        }, 1000)
        if(time <= 0) {
            navigate('/')
        }
        return () => {
            clearTimeout(timeout.current)
        }
    },[time])

    return (
        <div>
            <h1>Get out of here in: {time}</h1>
        </div>
    )
}