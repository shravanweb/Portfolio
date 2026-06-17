import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useThemeToggle } from '../app/ThemeToggleProvider';

// Hook to track mouse position for subtle effects
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
}

function AnimatedGradientOrb({ position, size, color, mousePosition, darkMode }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Subtle movement based on mouse
      const targetX = position[0] + mousePosition.x * 0.5;
      const targetY = position[1] + mousePosition.y * 0.5;

      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.02;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.02;

      // Gentle floating animation
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={darkMode ? 0.15 : 0.2}
      />
    </mesh>
  );
}

const HeroBackground3D = () => {
  const { darkMode } = useThemeToggle();
  const mousePosition = useMousePosition();

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: darkMode
          ? 'radial-gradient(ellipse at 30% 20%, #0d1729 0%, #070d1a 100%)'
          : 'radial-gradient(ellipse at 20% 30%, #eff4ff 0%, #f6f8fc 60%, #eef2ff 100%)',
      }}
    >
      {/* Subtle gradient orbs - no shapes, just soft glowing orbs */}
      <AnimatedGradientOrb
        position={[-5, 3, -8]}
        size={3}
        color={darkMode ? '#60a5fa' : '#2563eb'}
        mousePosition={mousePosition}
        darkMode={darkMode}
      />
      <AnimatedGradientOrb
        position={[5, -3, -10]}
        size={2.5}
        color={darkMode ? '#a78bfa' : '#7c3aed'}
        mousePosition={mousePosition}
        darkMode={darkMode}
      />
      <AnimatedGradientOrb
        position={[0, 2, -12]}
        size={2}
        color={darkMode ? '#34d399' : '#0891b2'}
        mousePosition={mousePosition}
        darkMode={darkMode}
      />
    </Canvas>
  );
};

export default HeroBackground3D;
