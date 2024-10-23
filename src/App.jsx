import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative z-0 bg-white w-screen h-screen overscroll-none overflow-y-hidden scrollbar-thin -ms-overflow-y-hidden">
       <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ position: [0, 3, 10], fov: 19, near: 1, far: 100 }}
      >
        <color attach="background" args={["#101010"]} />
        <ambientLight intensity={1} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

export default App
