import './styles.css'
import IMAGE from './react.png'
import LOGO from './react.svg'

export const App = () =>{
    return <>
     <h1>React typescript </h1>
     <img src={IMAGE} alt="React Logo" width='300' height='200' />
     <img src={LOGO} alt="React Logo" width='300' />

    </>
}