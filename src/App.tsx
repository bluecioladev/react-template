import './styles.css'
import IMAGE from './react.png'
import LOGO from './react.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  const name = 'jarb'
  return (
    <>
      <h1>
        {' '}
        hello jarb editado React typescript - {process.env.NODE_ENV} -{name}
        {process.env.name}
      </h1>
      <img src={IMAGE} alt="React Logo" width="300" height="200" />
      <img src={LOGO} alt="React Logo" width="300" height="200" />
      <ClickCounter />
    </>
  )
}
