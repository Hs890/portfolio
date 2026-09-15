"use client";

import { useEffect, useRef } from "react";

const VERTEX_SHADER = `
attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const FRAGMENT_SHADER = `
precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_dark;

float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    vec2 uv = v_texCoord;
    vec2 mouse = u_mouse / u_resolution;

    vec2 movement = vec2(
        sin(uv.x * 3.0 + u_time * 0.35) * 0.1,
        cos(uv.y * 3.0 + u_time * 0.22) * 0.1
    );

    float blob1 = 1.0 - length(uv - vec2(0.2, 0.8) + movement * 0.5);
    float blob2 = 1.0 - length(uv - vec2(0.8, 0.2) - movement * 0.3);
    float mouseGlow = 1.0 - length(uv - mouse);

    blob1 = pow(max(0.0, blob1), 4.0) * 0.18;
    blob2 = pow(max(0.0, blob2), 4.0) * 0.14;
    mouseGlow = pow(max(0.0, mouseGlow), 6.0) * 0.3;

    // Dark mode: warm obsidian blobs | Light mode: plum/berry #5E244E blobs
    vec3 darkBase   = mix(vec3(0.01), vec3(0.08, 0.08, 0.06), uv.y);
    vec3 darkAccent  = vec3(0.988, 1.0, 0.831);

    vec3 lightBase  = mix(vec3(0.98), vec3(0.965, 0.96, 0.965), uv.y);
    vec3 lightAccent = vec3(0.369, 0.141, 0.306);

    vec3 base   = mix(lightBase,   darkBase,   u_dark);
    vec3 accent = mix(lightAccent, darkAccent,  u_dark);

    float intensity = blob1 + blob2 + mouseGlow;
    vec3 finalColor = base + accent * intensity;

    float grain = noise(uv * u_time) * mix(0.012, 0.02, u_dark);
    finalColor += grain;

    gl_FragColor = vec4(finalColor, 1.0);
}`;

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = (canvas.getContext("webgl", {
      alpha: false,
      depth: false,
      antialias: false,
      powerPreference: "high-performance",
    }) ||
      canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return;

    const RESOLUTION_SCALE = 0.35;

    function syncSize() {
      const w = Math.round((canvas!.clientWidth || window.innerWidth) * RESOLUTION_SCALE);
      const h = Math.round((canvas!.clientHeight || window.innerHeight) * RESOLUTION_SCALE);
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width = w;
        canvas!.height = h;
      }
    }
    syncSize();

    const resizeObserver = new ResizeObserver(syncSize);
    resizeObserver.observe(canvas);

    const program = gl.createProgram();
    const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!program || !vs || !fs) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const positionLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uRes = gl.getUniformLocation(program, "u_resolution");
    const uMouse = gl.getUniformLocation(program, "u_mouse");
    const uDark = gl.getUniformLocation(program, "u_dark");

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    let mouseTicking = false;
    function handleMouseMove(event: MouseEvent) {
      if (!mouseTicking) {
        mouseTicking = true;
        requestAnimationFrame(() => {
          if (canvas) {
            const rect = canvas.getBoundingClientRect();
            if (rect.width && rect.height) {
              const nx = (event.clientX - rect.left) / rect.width;
              const ny = 1.0 - (event.clientY - rect.top) / rect.height;
              mouse.x = nx * canvas.width;
              mouse.y = ny * canvas.height;
            }
          }
          mouseTicking = false;
        });
      }
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let rafId = 0;
    function render(t: number) {
      const targetDark = document.documentElement.classList.contains("dark") ? 1.0 : 0.0;

      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      if (uTime) gl!.uniform1f(uTime, t * 0.001);
      if (uRes) gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      if (uMouse) gl!.uniform2f(uMouse, mouse.x, mouse.y);
      if (uDark) gl!.uniform1f(uDark, targetDark);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(render);
    }

    function handleVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(render);
      }
    }
    document.addEventListener("visibilitychange", handleVisibility);

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />
      <div className="absolute inset-0 bg-background/85" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
