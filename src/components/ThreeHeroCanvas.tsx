import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeHeroCanvasProps {
  isDarkMode: boolean;
}

export const ThreeHeroCanvas: React.FC<ThreeHeroCanvasProps> = ({ isDarkMode }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;
    let geometry: THREE.BufferGeometry | null = null;
    let material: THREE.PointsMaterial | null = null;
    let torusGeometry: THREE.TorusGeometry | null = null;
    let torusMaterial: THREE.MeshBasicMaterial | null = null;
    let ring2Geometry: THREE.TorusGeometry | null = null;

    try {
      // Strictly constrain canvas to viewport dimensions (never document height)
      const width = Math.min(window.innerWidth || 800, 1920);
      const height = Math.min(window.innerHeight || 600, 1080);

      // Scene & Camera
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, width / (height || 1), 0.1, 1000);
      camera.position.z = 4.5;

      // WebGL Renderer with Alpha transparency and explicit 0-alpha clear
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: 'low-power',
        failIfMajorPerformanceCaveat: false
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(width, height);
      renderer.setPixelRatio(1); // Keep 1x pixel ratio for maximum performance & safety

      const domElement = renderer.domElement;
      domElement.style.position = 'fixed';
      domElement.style.top = '0';
      domElement.style.left = '0';
      domElement.style.width = '100%';
      domElement.style.height = '100%';
      domElement.style.pointerEvents = 'none';
      domElement.style.zIndex = '-10';

      // Context lost listener
      const handleContextLost = (e: Event) => {
        e.preventDefault();
        setHasWebGL(false);
      };
      domElement.addEventListener('webglcontextlost', handleContextLost, false);

      mount.appendChild(domElement);

      // Particle Constellation Geometry
      const particlesCount = 750;
      geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 14;
        positions[i + 1] = (Math.random() - 0.5) * 14;
        positions[i + 2] = (Math.random() - 0.5) * 10;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      // Material
      const colorHex = isDarkMode ? 0xf59e0b : 0xd97706;
      material = new THREE.PointsMaterial({
        size: 0.035,
        color: colorHex,
        transparent: true,
        opacity: isDarkMode ? 0.65 : 0.45,
        blending: THREE.AdditiveBlending,
      });

      const particlesMesh = new THREE.Points(geometry, material);
      scene.add(particlesMesh);

      // Kinetic 3D Wireframe Torus Ring
      torusGeometry = new THREE.TorusGeometry(2.4, 0.025, 16, 80);
      torusMaterial = new THREE.MeshBasicMaterial({
        color: colorHex,
        wireframe: true,
        transparent: true,
        opacity: isDarkMode ? 0.22 : 0.15,
      });
      const torus = new THREE.Mesh(torusGeometry, torusMaterial);
      scene.add(torus);

      // Secondary smaller floating ring tilted
      ring2Geometry = new THREE.TorusGeometry(1.6, 0.015, 12, 60);
      const ring2 = new THREE.Mesh(ring2Geometry, torusMaterial);
      ring2.rotation.x = Math.PI / 3;
      scene.add(ring2);

      // Mouse movement interaction
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX / (window.innerWidth || 1)) - 0.5;
        mouseY = (event.clientY / (window.innerHeight || 1)) - 0.5;
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });

      // Resize Handler
      const handleResize = () => {
        if (!renderer) return;
        const currentW = Math.min(window.innerWidth || 800, 1920);
        const currentH = Math.min(window.innerHeight || 600, 1080);
        camera.aspect = currentW / (currentH || 1);
        camera.updateProjectionMatrix();
        renderer.setSize(currentW, currentH);
      };

      window.addEventListener('resize', handleResize, { passive: true });

      // Animation Loop
      const clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        try {
          const elapsedTime = clock.getElapsedTime();

          targetX += (mouseX - targetX) * 0.05;
          targetY += (mouseY - targetY) * 0.05;

          particlesMesh.rotation.y = elapsedTime * 0.04 + targetX * 0.5;
          particlesMesh.rotation.x = elapsedTime * 0.02 + targetY * 0.3;

          torus.rotation.x = elapsedTime * 0.08 + targetY * 0.4;
          torus.rotation.y = elapsedTime * 0.05 + targetX * 0.4;

          ring2.rotation.z = -elapsedTime * 0.06;
          ring2.rotation.y = elapsedTime * 0.07;

          renderer.render(scene, camera);
        } catch {
          // If WebGL fails mid-frame, cleanly exit loop
          cancelAnimationFrame(animationFrameId);
          setHasWebGL(false);
        }
      };

      animate();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        if (mount && renderer?.domElement && mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
        geometry?.dispose();
        material?.dispose();
        torusGeometry?.dispose();
        torusMaterial?.dispose();
        ring2Geometry?.dispose();
        renderer?.dispose();
      };
    } catch (err) {
      console.warn('Three.js WebGL not available, falling back to CSS effects:', err);
      setHasWebGL(false);
    }
  }, [isDarkMode]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
    >
      {!hasWebGL && (
        <div className="fixed inset-0 opacity-40 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none -z-10" />
      )}
    </div>
  );
};
