import {
  convertDamInputToFailure,
  DamFailure,
  DamFailureInput,
} from "../empiricalEqn";
import Canvas from "./canvas";

export default function DamSchematic({
  damInput: damInput,
  canvasSize,
}: {
  damInput: DamFailureInput;
  canvasSize: { width: number; height: number };
}) {
  const draw = (ctx: CanvasRenderingContext2D) => {
    const damFailure: DamFailure = convertDamInputToFailure(damInput);
    
    let heightOfWater = damFailure.heightOfWater;
    let depthOfBreach = damFailure.depthOfBreach;
    let heightOfDam = damFailure.heightOfDam;
    let averageWidth = damFailure.averageWidth;
    let assumedBreachDepth = damInput.depthOfBreach?.replace(/,/g, "") ? false : true;
    let assumedDamHeight = damInput.heightOfDam?.replace(/,/g, "") ? false : true;
    let assumedDamWidth = damInput.averageWidth?.replace(/,/g, "") ? false : true;

    if (ctx) {
      const wMax = ctx.canvas.width;
      const hMax = ctx.canvas.height;
      const verticalExaggeration = 1;

      // Calculate maximum unit sizes for the figure
      let hBUnitLimit =
        ((hMax / 4) * heightOfDam) / (depthOfBreach - heightOfDam);
      let hWUnitLimit =
        (((3 / 4) * hMax - 16) * heightOfDam) /
        (heightOfDam - depthOfBreach + heightOfWater);
      // Ensure non-negative upper limits
      hBUnitLimit = hBUnitLimit > 0 ? hBUnitLimit : Infinity;
      hWUnitLimit = hWUnitLimit > 0 ? hWUnitLimit : Infinity;
      // Choose the largest unit size that satisfies all upper limits
      const unit = Math.min(
        (1 / 2) * hMax,
        hBUnitLimit,
        hWUnitLimit,
        ((wMax / 2 - 30) * 8 * heightOfDam * verticalExaggeration) /
          (3 * heightOfDam * verticalExaggeration + 8 * averageWidth)
      );

      // Set up dam dimensions based on "unit" length, defined above
      const wCrest =
        averageWidth > (heightOfDam * 3) / 4
          ? (unit * 3) / 4
          : (averageWidth / heightOfDam) * unit;

      const baseY = (hMax * 3) / 4;
      const crestY = baseY - unit;
      const breachY = crestY + (depthOfBreach / heightOfDam) * unit;
      const waterY = breachY - (heightOfWater / heightOfDam) * unit;
      const leftCrestX = wMax / 2 - wCrest / 2;
      const rightCrestX = wMax / 2 + wCrest / 2;
      const slope = ((averageWidth / heightOfDam) * unit - wCrest) / unit;
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
      if (!assumedDamHeight) {
        drawDimension(
          ctx,
          heightOfDam,
          30,
          baseY,
          30,
          crestY,
          [9, 0],
          assumedDamHeight,
          true
        );
      }

      if (!assumedBreachDepth) {
        drawDimension(
          ctx,
          depthOfBreach,
          10,
          breachY,
          10,
          crestY,
          [9, 0],
          assumedBreachDepth,
          true
        );
      }

      drawDimension(
        ctx,
        heightOfWater,
        50,
        breachY,
        50,
        waterY,
        [9, 0],
        false,
        true
      );

      drawDimension(
        ctx,
        assumedDamWidth ? Math.round(averageWidth) : averageWidth,
        (leftToeX + leftCrestX) / 2,
        hMax - (1 / 4) * unit,
        (rightToeX + rightCrestX) / 2,
        hMax - (1 / 4) * unit,
        [0, -9],
        assumedDamWidth
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
      dependencyArray={[damInput]}
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
