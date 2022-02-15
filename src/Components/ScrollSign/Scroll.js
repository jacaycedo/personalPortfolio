import './scroll.css'
import { FormattedMessage } from 'react-intl'

function Scroll()
{
    return(
        <div className ="contenedorScroll">
            <div className='mouse'></div>
            <p className='scroll'><FormattedMessage id="scroll" ></FormattedMessage></p>
        </div>
    )
}

export default Scroll