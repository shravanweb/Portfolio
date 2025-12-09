import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useThemeToggle } from '../app/ThemeToggleProvider';

function FloatingCube({ position, color, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed;
      meshRef.current.rotation.y += delta * speed * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

function FloatingSphere({ position, color, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed * 0.3;
      meshRef.current.rotation.z += delta * speed * 0.7;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.25}
      />
    </mesh>
  );
}

const FloatingGeometry = ({ darkMode }) => {
  const primaryColor = darkMode ? '#ffcc00' : '#007fff';
  const secondaryColor = darkMode ? '#66bb6a' : '#ff6b6b';
  const tertiaryColor = darkMode ? '#ffffff' : '#4caf50';

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.6} />
      <FloatingCube position={[8, 2, -10]} color={primaryColor} speed={0.5} />
      <FloatingCube position={[-8, -2, -12]} color={secondaryColor} speed={0.7} />
      <FloatingSphere position={[0, 4, -8]} color={tertiaryColor} speed={0.6} />
      <FloatingSphere position={[-5, -3, -10]} color={primaryColor} speed={0.4} />
    </>
  );
};

export default FloatingGeometry;

