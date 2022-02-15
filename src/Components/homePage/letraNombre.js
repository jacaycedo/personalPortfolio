
import React, {useState}from 'react'

const Letra = (letra, ind) =>
{
    const [animado, setAnimado] = useState(false);
    function handleHover()
    {
        setAnimado(true);
    }

    function handleOver()
    {
        setAnimado(false);
    }

    return <span onMouseEnter={handleHover}  onAnimationEnd={handleOver} key={ind} className = {`name ${animado?"animada":""} `}>{letra}</span>
}

export default Letra;