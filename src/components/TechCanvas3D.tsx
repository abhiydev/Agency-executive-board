"use client";

import React, { useEffect, useRef } from "react";

interface Node3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
  type: "cube" | "octahedron" | "sphere" | "hexagon";
  rotX: number;
  rotY: number;
  rotZ: number;
  rotSpeedX: number;
  rotSpeedY: number;
}

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  alpha: number;
  pulseSpeed: number;
}

interface Pulse {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export const TechCanvas3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const updateSize = () => {
      if (!canvas || !canvas.parentElement) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // Mouse Damping State for Perspective Tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let tiltX = 0;
    let tiltY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / width - 0.5;
      const normY = (e.clientY - rect.top) / height - 0.5;
      mouseX = e.clientX - rect.left - width / 2;
      mouseY = e.clientY - rect.top - height / 2;
      targetTiltX = normX * 0.25; // Yaw angle (radians)
      targetTiltY = -normY * 0.25; // Pitch angle (radians)
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Color Palette
    const colors = ["#00F0FF", "#3B82F6", "#818CF8", "#00D0FF", "#6366F1"];

    // 1. Initialize Geometric Tech Nodes
    const nodeCount = 38;
    const nodes: Node3D[] = [];
    const types: Node3D["type"][] = ["cube", "octahedron", "sphere", "hexagon"];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * 1100,
        y: (Math.random() - 0.5) * 650,
        z: Math.random() * 600 + 100,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        vz: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 12 + 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: types[Math.floor(Math.random() * types.length)],
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
      });
    }

    // 2. Initialize Particle Field (Ambient Illumination)
    const particleCount = 70;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 1400,
        y: (Math.random() - 0.5) * 900,
        z: Math.random() * 800 + 50,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2.5 + 0.8,
        alpha: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.03 + 0.01,
      });
    }

    // 3. Energy Pulses along Node Connections
    const pulses: Pulse[] = [];

    // 3D Perspective Projection Matrix Helper
    const fov = 420;

    const project3D = (
      x: number,
      y: number,
      z: number,
      tX: number,
      tY: number
    ) => {
      // Rotation Y (Yaw)
      const cosY = Math.cos(tX);
      const sinY = Math.sin(tX);
      const x1 = x * cosY - z * sinY;
      const z1 = z * cosY + x * sinY;

      // Rotation X (Pitch)
      const cosX = Math.cos(tY);
      const sinX = Math.sin(tY);
      const y2 = y * cosX - z1 * sinX;
      const z2 = z1 * cosX + y * sinX;

      const depth = fov + z2;
      if (depth <= 1) return null;

      const scale = fov / depth;
      const px = x1 * scale + width / 2;
      const py = y2 * scale + height / 2;

      return { px, py, scale, depth, z2 };
    };

    // Helper: Draw 3D Cube Wireframe
    const draw3DCube = (
      px: number,
      py: number,
      scale: number,
      size: number,
      rotX: number,
      rotY: number,
      color: string
    ) => {
      const s = size * scale;
      const vertices = [
        { x: -s, y: -s, z: -s },
        { x: s, y: -s, z: -s },
        { x: s, y: s, z: -s },
        { x: -s, y: s, z: -s },
        { x: -s, y: -s, z: s },
        { x: s, y: -s, z: s },
        { x: s, y: s, z: s },
        { x: -s, y: s, z: s },
      ];

      // Rotate local vertices
      const cosX = Math.cos(rotX),
        sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY),
        sinY = Math.sin(rotY);

      const projVerts = vertices.map((v) => {
        const x1 = v.x * cosY - v.z * sinY;
        const z1 = v.z * cosY + v.x * sinY;
        const y2 = v.y * cosX - z1 * sinX;
        return { x: px + x1, y: py + y2 };
      });

      const edges = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
        [4, 5],
        [5, 6],
        [6, 7],
        [7, 4],
        [0, 4],
        [1, 5],
        [2, 6],
        [3, 7],
      ];

      ctx.strokeStyle = color;
      ctx.lineWidth = 1.2 * scale;
      ctx.beginPath();
      edges.forEach(([i, j]) => {
        ctx.moveTo(projVerts[i].x, projVerts[i].y);
        ctx.lineTo(projVerts[j].x, projVerts[j].y);
      });
      ctx.stroke();
    };

    // Helper: Draw 3D Octahedron Wireframe
    const draw3DOctahedron = (
      px: number,
      py: number,
      scale: number,
      size: number,
      rotX: number,
      rotY: number,
      color: string
    ) => {
      const s = size * scale * 1.3;
      const rawVerts = [
        { x: 0, y: -s, z: 0 },
        { x: s, y: 0, z: 0 },
        { x: 0, y: 0, z: s },
        { x: -s, y: 0, z: 0 },
        { x: 0, y: 0, z: -s },
        { x: 0, y: s, z: 0 },
      ];

      const cosX = Math.cos(rotX),
        sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY),
        sinY = Math.sin(rotY);

      const projVerts = rawVerts.map((v) => {
        const x1 = v.x * cosY - v.z * sinY;
        const z1 = v.z * cosY + v.x * sinY;
        const y2 = v.y * cosX - z1 * sinX;
        return { x: px + x1, y: py + y2 };
      });

      const edges = [
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [5, 1],
        [5, 2],
        [5, 3],
        [5, 4],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 1],
      ];

      ctx.strokeStyle = color;
      ctx.lineWidth = 1.1 * scale;
      ctx.beginPath();
      edges.forEach(([i, j]) => {
        ctx.moveTo(projVerts[i].x, projVerts[i].y);
        ctx.lineTo(projVerts[j].x, projVerts[j].y);
      });
      ctx.stroke();
    };

    // Grid animation scroll offset
    let gridOffsetZ = 0;

    // --- MAIN RENDER LOOP ---
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse tilt interpolation (Damping)
      tiltX += (targetTiltX - tiltX) * 0.05;
      tiltY += (targetTiltY - tiltY) * 0.05;

      // ----------------------------------------------------
      // 1. Glowing 3D Ambient Grid Floor
      // ----------------------------------------------------
      gridOffsetZ = (gridOffsetZ + 0.6) % 50;
      const gridY = 240; // Plane depth below center
      const gridSpanX = 1200;
      const gridMinZ = 50;
      const gridMaxZ = 800;
      const gridStepZ = 45;
      const gridStepX = 60;

      ctx.save();
      // Draw Grid Z lines
      for (let x = -gridSpanX; x <= gridSpanX; x += gridStepX) {
        const pStart = project3D(x, gridY, gridMinZ, tiltX, tiltY);
        const pEnd = project3D(x, gridY, gridMaxZ, tiltX, tiltY);

        if (pStart && pEnd) {
          const grad = ctx.createLinearGradient(
            pStart.px,
            pStart.py,
            pEnd.px,
            pEnd.py
          );
          grad.addColorStop(0, "rgba(0, 240, 255, 0.18)");
          grad.addColorStop(0.6, "rgba(79, 70, 229, 0.1)");
          grad.addColorStop(1, "rgba(11, 15, 23, 0)");

          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(pStart.px, pStart.py);
          ctx.lineTo(pEnd.px, pEnd.py);
          ctx.stroke();
        }
      }

      // Draw Grid X cross lines moving forward
      for (let z = gridMinZ; z <= gridMaxZ; z += gridStepZ) {
        const curZ = z + gridOffsetZ;
        if (curZ > gridMaxZ) continue;

        const pLeft = project3D(-gridSpanX, gridY, curZ, tiltX, tiltY);
        const pRight = project3D(gridSpanX, gridY, curZ, tiltX, tiltY);

        if (pLeft && pRight) {
          const alpha = Math.max(0, (1 - curZ / gridMaxZ) * 0.2);
          ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(pLeft.px, pLeft.py);
          ctx.lineTo(pRight.px, pRight.py);
          ctx.stroke();
        }
      }
      ctx.restore();

      // ----------------------------------------------------
      // 2. Ambient Particle Illumination
      // ----------------------------------------------------
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;
        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.005;

        if (p.x < -700 || p.x > 700) p.vx *= -1;
        if (p.y < -450 || p.y > 450) p.vy *= -1;
        if (p.z < 50 || p.z > 850) p.vz *= -1;

        const proj = project3D(p.x, p.y, p.z, tiltX, tiltY);
        if (proj) {
          const pSize = p.size * proj.scale;
          ctx.fillStyle = `rgba(0, 240, 255, ${Math.max(0.1, Math.min(0.8, p.alpha * proj.scale))})`;
          ctx.beginPath();
          ctx.arc(proj.px, proj.py, pSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ----------------------------------------------------
      // 3. Floating 3D Geometric Nodes & Network Connections
      // ----------------------------------------------------
      // Projected state store
      const projectedNodes: Array<{
        px: number;
        py: number;
        scale: number;
        node: Node3D;
        idx: number;
      } | null> = [];

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Update physics & rotation
        n.x += n.vx;
        n.y += n.vy;
        n.z += n.vz;
        n.rotX += n.rotSpeedX;
        n.rotY += n.rotSpeedY;

        // Subtle interactive mouse attraction / repulsion
        const dx = n.x - mouseX * 0.8;
        const dy = n.y - mouseY * 0.8;
        const distMouse = Math.sqrt(dx * dx + dy * dy);
        if (distMouse < 180 && distMouse > 0) {
          n.x += (dx / distMouse) * 0.4;
          n.y += (dy / distMouse) * 0.4;
        }

        // Bound checks
        if (n.x < -550 || n.x > 550) n.vx *= -1;
        if (n.y < -320 || n.y > 320) n.vy *= -1;
        if (n.z < 80 || n.z > 700) n.vz *= -1;

        const proj = project3D(n.x, n.y, n.z, tiltX, tiltY);
        if (proj) {
          projectedNodes.push({
            px: proj.px,
            py: proj.py,
            scale: proj.scale,
            node: n,
            idx: i,
          });
        } else {
          projectedNodes.push(null);
        }
      }

      // Draw connection lines between nearest nodes
      for (let i = 0; i < projectedNodes.length; i++) {
        const p1 = projectedNodes[i];
        if (!p1) continue;

        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p2 = projectedNodes[j];
          if (!p2) continue;

          const dx = p1.node.x - p2.node.x;
          const dy = p1.node.y - p2.node.y;
          const dz = p1.node.z - p2.node.z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < 190) {
            const alpha = (1 - dist3D / 190) * 0.35 * Math.min(p1.scale, p2.scale);
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();

            // Randomly spawn pulses on valid edges
            if (Math.random() < 0.0015 && pulses.length < 12) {
              pulses.push({
                fromNode: i,
                toNode: j,
                progress: 0,
                speed: 0.015 + Math.random() * 0.02,
                color: p1.node.color,
              });
            }
          }
        }
      }

      // Render Active Light Pulses Traveling along Edges
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        const p1 = projectedNodes[pulse.fromNode];
        const p2 = projectedNodes[pulse.toNode];

        if (!p1 || !p2) {
          pulses.splice(i, 1);
          continue;
        }

        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulses.splice(i, 1);
          continue;
        }

        const pulsePx = p1.px + (p2.px - p1.px) * pulse.progress;
        const pulsePy = p1.py + (p2.py - p1.py) * pulse.progress;
        const pulseScale = p1.scale + (p2.scale - p1.scale) * pulse.progress;

        const pulseGlow = ctx.createRadialGradient(
          pulsePx,
          pulsePy,
          0,
          pulsePx,
          pulsePy,
          7 * pulseScale
        );
        pulseGlow.addColorStop(0, pulse.color);
        pulseGlow.addColorStop(1, "rgba(0, 240, 255, 0)");

        ctx.fillStyle = pulseGlow;
        ctx.beginPath();
        ctx.arc(pulsePx, pulsePy, 7 * pulseScale, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(pulsePx, pulsePy, 2 * pulseScale, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw Node Shapes & Glow Cores
      for (let i = 0; i < projectedNodes.length; i++) {
        const p = projectedNodes[i];
        if (!p) continue;

        const { px, py, scale, node } = p;
        const projSize = node.size * scale;

        // Radial Glow Aura
        const aura = ctx.createRadialGradient(
          px,
          py,
          0,
          px,
          py,
          projSize * 3.5
        );
        aura.addColorStop(0, node.color);
        aura.addColorStop(0.4, `rgba(0, 240, 255, 0.15)`);
        aura.addColorStop(1, "rgba(11, 15, 23, 0)");

        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(px, py, projSize * 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Geometric Wireframe Node rendering
        if (node.type === "cube") {
          draw3DCube(
            px,
            py,
            scale,
            node.size,
            node.rotX,
            node.rotY,
            node.color
          );
        } else if (node.type === "octahedron") {
          draw3DOctahedron(
            px,
            py,
            scale,
            node.size,
            node.rotX,
            node.rotY,
            node.color
          );
        } else if (node.type === "hexagon") {
          // 3D Hexagon Ring
          ctx.strokeStyle = node.color;
          ctx.lineWidth = 1.3 * scale;
          ctx.beginPath();
          for (let k = 0; k < 6; k++) {
            const angle = (k * Math.PI) / 3 + node.rotX;
            const hx = px + Math.cos(angle) * projSize * 1.2;
            const hy = py + Math.sin(angle) * projSize * 0.7; // Compressed for isometric view
            if (k === 0) ctx.moveTo(hx, hy);
            else ctx.lineTo(hx, hy);
          }
          ctx.closePath();
          ctx.stroke();
        }

        // Inner Glowing Core Orb
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(px, py, Math.max(1.8, projSize * 0.25), 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-75">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
