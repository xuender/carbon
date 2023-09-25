export const Canvas = (): string => {
  const canvasElement = document.createElement('canvas');
  canvasElement.hidden = true;

  const canvas = document.body.appendChild(canvasElement);
  canvas.width = 500;
  canvas.height = 80;

  const ctx = canvas.getContext('2d');

  let ret = '';
  if (ctx) {
    render(ctx);
    ret = canvas.toDataURL();
  }

  document.body.removeChild(canvasElement);

  return ret;
};

const render = (ctx: CanvasRenderingContext2D) => {
  const canvasFont = `20px unknown-font-${Math.floor(Math.random() * 10000)}`;

  ctx.beginPath();
  ctx.font = canvasFont;
  ctx.fillStyle = '#fe0000';
  ctx.fillText('😀🍇✨abcdefghijklmnopqrstuvwxyz0123456789', 0, 30);
  ctx.strokeStyle = '#00fe00';
  ctx.strokeText('😀🍇✨abcdefghijklmnopqrstuvwxyz0123456789', 0, 60);
  ctx.globalCompositeOperation = 'lighter';
  ctx.fillStyle = '#aaaaac';
  ctx.fillRect(100, 0, 100, 80);
};
