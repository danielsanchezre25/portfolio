import { useEffect, useRef } from "react";
import { useTheme } from "../../../hooks/ThemeContext/ThemeContext";

type Circle = {
  x: number;
  y: number;
  radius: number;
};

const CELL_SIZE = 40;
const MAX_RADIUS = 5;

export default function CanvasBackground() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const circles = useRef<Circle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      circles.current = [];

      const cols = Math.ceil(window.innerWidth / CELL_SIZE);
      const rows = Math.ceil(window.innerHeight / CELL_SIZE);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          circles.current.push({
            x: x * CELL_SIZE + CELL_SIZE / 2,
            y: y * CELL_SIZE + CELL_SIZE / 2,
            radius: 1
          });
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      circles.current.forEach(circle => {
        const dx = mouse.current.x - circle.x;
        const dy = mouse.current.y - circle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const radius = Math.max(
          1,
          MAX_RADIUS - dist * 0.02
        );

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = theme === 'dark' ? '#004b4b' : '#fdb270';
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }

    resizeCanvas();
    draw();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="canvas-background" />;
}