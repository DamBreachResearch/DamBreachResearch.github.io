import Canvas from "./utils/canvas";

export default function DamSchematic({
  heightOfWater,
  depthOfBreach,
  heightOfDam,
  averageWidth,
  canvasSize,
}: {
  heightOfWater: string;
  depthOfBreach: string;
  heightOfDam: string;
  averageWidth: string;
  canvasSize: {width: number, height: number};
}) {
  const draw = (ctx: CanvasRenderingContext2D) => {
    let h_w = Number(heightOfWater?.replace(/,/g, ""));
    let h_b = Number(depthOfBreach?.replace(/,/g, ""));
    let h_d = Number(heightOfDam?.replace(/,/g, ""));
    let w_avg = Number(averageWidth?.replace(/,/g, ""));

    let assumedHb = false;
    let assumedHd = false;
    let assumedWavg = false;

    if (!h_w) {
      h_w = 1;
    }

    if (!h_d) {
      h_d = h_b ? h_b : h_w;
      assumedHd = true;
    }

    if (!h_b) {
      h_b = h_d;
      assumedHb = true;
    }

    if (!w_avg) {
      w_avg = h_d * 2.6;
      assumedWavg = true;
    }

    if (ctx) {
      const wMax = ctx.canvas.width;
      const hMax = ctx.canvas.height;
      const verticalExaggeration = 1;

      // Calculate maximum unit sizes for the figure
      let hBUnitLimit = ((hMax / 4) * h_d) / (h_b - h_d);
      let hWUnitLimit = (((3 / 4) * hMax - 16) * h_d) / (h_d - h_b + h_w);
      // Ensure non-negative upper limits
      hBUnitLimit = hBUnitLimit > 0 ? hBUnitLimit : Infinity;
      hWUnitLimit = hWUnitLimit > 0 ? hWUnitLimit : Infinity;
      // Choose the largest unit size that satisfies all upper limits
      const unit = Math.min(
        (1 / 2) * hMax,
        hBUnitLimit,
        hWUnitLimit,
        ((wMax / 2 - 30) * 8 * h_d * verticalExaggeration) /
          (3 * h_d * verticalExaggeration + 8 * w_avg)
      );

      // Set up dam dimensions based on "unit" length, defined above
      const wCrest =
        w_avg > (h_d * 3) / 4 ? (unit * 3) / 4 : (w_avg / h_d) * unit;

      const baseY = (hMax * 3) / 4;
      const crestY = baseY - unit;
      const breachY = crestY + (h_b / h_d) * unit;
      const waterY = breachY - (h_w / h_d) * unit;
      const leftCrestX = wMax / 2 - wCrest / 2;
      const rightCrestX = wMax / 2 + wCrest / 2;
      const slope = ((w_avg / h_d) * unit - wCrest) / unit;
      const leftToeX = leftCrestX - (unit * slope) / verticalExaggeration;
      const rightToeX = rightCrestX + (unit * slope) / verticalExaggeration;

      // Clear area first
      ctx.clearRect(0, 0, wMax, hMax);
      // 2D dam shape
      ctx.beginPath();
      ctx.strokeStyle = "white";
      ctx.lineWidth = 2;
      ctx.moveTo(0, baseY);
      ctx.lineTo(leftToeX, baseY);
      ctx.lineTo(leftCrestX, crestY);
      ctx.lineTo(rightCrestX, crestY);
      ctx.lineTo(rightToeX, baseY);
      ctx.lineTo(wMax, baseY);
      ctx.stroke();

      // Add 3D effect
      ctx.lineWidth = 1;
      const length3d = 50;
      const ratio3d = 6;
      ctx.beginPath();
      ctx.moveTo(leftCrestX, crestY);
      ctx.lineTo(leftCrestX + length3d * ratio3d, crestY - length3d);
      ctx.moveTo(rightCrestX, crestY);
      ctx.lineTo(rightCrestX + length3d * ratio3d, crestY - length3d);
      ctx.moveTo(rightToeX, baseY);
      ctx.lineTo(rightToeX + length3d * ratio3d, baseY - length3d);
      ctx.stroke();

      // Mark crest height and dam foundation
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(0, crestY);
      ctx.lineTo(leftCrestX, crestY);
      ctx.stroke();
      if (Math.abs(breachY - baseY) > 10) {
        // Draw dam foundation
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(0, baseY);
        ctx.lineTo(wMax, baseY);
        ctx.stroke();
      }

      // Breach depth
      ctx.setLineDash([10, 10]);
      ctx.strokeStyle = "#ff6900";
      ctx.beginPath();
      ctx.moveTo(0, breachY);
      ctx.lineTo(wMax, breachY);
      ctx.stroke();
      ctx.font = "italic 16px serif";
      ctx.fillStyle = "#ff6900";
      ctx.textAlign = "right";
      ctx.fillText("breach depth", wMax - 3, breachY - 4);

      // Water height
      ctx.setLineDash([]);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, waterY);
      const waterLineX = Math.min(
        leftCrestX - (slope * (waterY - crestY)) / 2,
        wMax / 2
      );
      ctx.lineTo(waterLineX, waterY);
      ctx.stroke();
      ctx.textAlign = "left";
      ctx.fillText("water level", 3, waterY - 4);

      // Add dimensions
      ctx.lineWidth = 2;
      ctx.strokeStyle = "white";
      if (!assumedHd) {
        drawDimension(ctx, h_d, 30, baseY, 30, crestY, [9, 0], assumedHd, true);
      }

      if (!assumedHb) {
        drawDimension(
          ctx,
          h_b,
          10,
          breachY,
          10,
          crestY,
          [9, 0],
          assumedHb,
          true
        );
      }

      drawDimension(ctx, h_w, 50, breachY, 50, waterY, [9, 0], false, true);

      drawDimension(
        ctx,
        assumedWavg ? Math.round(w_avg) : w_avg,
        (leftToeX + leftCrestX) / 2,
        hMax - (1 / 4) * unit,
        (rightToeX + rightCrestX) / 2,
        hMax - (1 / 4) * unit,
        [0, -9],
        assumedWavg
      );

      // leader lines from width dimension
      ctx.setLineDash([5, 5]);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.moveTo((leftToeX + leftCrestX) / 2, (baseY + crestY) / 2 + 7);
      ctx.lineTo((leftToeX + leftCrestX) / 2, hMax - (1 / 4) * unit + 7);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo((rightToeX + rightCrestX) / 2, (baseY + crestY) / 2 + 7);
      ctx.lineTo((rightToeX + rightCrestX) / 2, hMax - (1 / 4) * unit + 7);
      ctx.stroke();
    }
  };
  return (
      <Canvas
        width={canvasSize.width}
        height={canvasSize.height}
        draw={draw}
        dependencyArray={[
          heightOfDam,
          heightOfWater,
          depthOfBreach,
          averageWidth,
        ]}
      />
  );
}

function drawDoubleArrow(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number
) {
  const tipLength = 7;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const tipRatio = tipLength / (dx ** 2 + dy ** 2) ** 0.5;
  const arrowTipDir1 = [
    (dx * 3 ** 0.5) / 2 + dy / 2,
    (dx * -1) / 2 + (dy * 3 ** 0.5) / 2,
  ];
  const arrowTipDir2 = [
    (dx * 3 ** 0.5) / 2 - dy / 2,
    dx / 2 + (dy * 3 ** 0.5) / 2,
  ];
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x1 + arrowTipDir1[0] * tipRatio, y1 + arrowTipDir1[1] * tipRatio);
  ctx.moveTo(x1, y1);
  ctx.lineTo(x1 + arrowTipDir2[0] * tipRatio, y1 + arrowTipDir2[1] * tipRatio);

  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x2 - arrowTipDir1[0] * tipRatio, y2 - arrowTipDir1[1] * tipRatio);
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - arrowTipDir2[0] * tipRatio, y2 - arrowTipDir2[1] * tipRatio);
  ctx.stroke();
}

function drawDimension(
  ctx: CanvasRenderingContext2D,
  dimensionValue: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  offset: number[],
  assumed?: boolean,
  rotate?: boolean
) {
  let displayValue = assumed ? "~" : "";
  displayValue += dimensionValue.toLocaleString();
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.font = "bold 16px serif";
  ctx.fillStyle = assumed ? "#cfcfcfff" : "white";
  ctx.translate((x1 + x2) / 2 + offset[0], (y1 + y2) / 2 + offset[1]);
  if (rotate) {
    ctx.rotate(Math.PI / 2);
  }
  ctx.fillText(displayValue, 0, 0);
  ctx.resetTransform();
  return drawDoubleArrow(ctx, x1, y1, x2, y2);
}
