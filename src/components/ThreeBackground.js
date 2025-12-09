import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points } from '@react-three/drei';
import * as THREE from 'three';
import { useThemeToggle } from '../app/ThemeToggleProvider';

function AnimatedStars({ darkMode }) {
  const ref = useRef();
  
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <pointsMaterial
          transparent
          color={darkMode ? '#ffffff' : '#007fff'}
          size={0.5}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingShapes({ darkMode }) {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[5, 0, -5]}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={darkMode ? '#ffcc00' : '#007fff'}
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

function FloatingShapes2({ darkMode }) {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta * 0.15;
      meshRef.current.rotation.z += delta * 0.25;
      meshRef.current.position.x = Math.cos(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[-5, 2, -8]}>
      <tetrahedronGeometry args={[1.2, 0]} />
      <meshStandardMaterial
        color={darkMode ? '#66bb6a' : '#ff6b6b'}
        wireframe
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

const ThreeBackground = () => {
  const { darkMode } = useThemeToggle();

  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: darkMode 
          ? 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)'
          : 'radial-gradient(ellipse at bottom, #e3f2fd 0%, #ffffff 100%)',
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <AnimatedStars darkMode={darkMode} />
      <FloatingShapes darkMode={darkMode} />
      <FloatingShapes2 darkMode={darkMode} />
    </Canvas>
  );
};

export default ThreeBackground;

