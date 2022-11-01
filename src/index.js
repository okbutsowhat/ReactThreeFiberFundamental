import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'


const root = ReactDOM.createRoot(document.querySelector('#root'))

const created = (state) => {
  console.log(state);
}
const onEvent = (event) => {
  console.log(event);
}
root.render(
  <Canvas
    shadows={false}
    onCreated={created}
    onPointerMissed={onEvent}
  >
    <Experience></Experience>
  </Canvas>
)