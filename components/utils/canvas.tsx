import { useRef, useEffect } from "react";

export default function Canvas({
  height,
  width,
  draw,
  dependencyArray,
}: {
  height: number;
  width: number;
  draw: (canvas: CanvasRenderingContext2D) => void;
  dependencyArray: unknown[];
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d");

      if (context) {
        // context.canvas.height = height;
        // context.canvas.width = width;

        frameRef.current = requestAnimationFrame(() => draw(context));
      }
    }
    return () => cancelAnimationFrame(frameRef.current);
  }, [height, width, draw, ...dependencyArray]);

  return <canvas width={300} height={300} className="min-h-0 max-w-1/1" ref={canvasRef} />;
}
