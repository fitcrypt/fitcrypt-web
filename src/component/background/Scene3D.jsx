import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Stars(props) {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#fd6934" // Primary Orange
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

function NeuralConnections() {
    // A simplified "neural" effect using lines or just more structured particles could go here.
    // For now, let's stick to a dense, floating particle field that looks like data/stars.
    return null;
}

export default function Scene3D() {
    return (
        <div className="fixed inset-0 z-0 bg-neuron-bg">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <Stars />
                </Float>
            </Canvas>
        </div>
    );
}
