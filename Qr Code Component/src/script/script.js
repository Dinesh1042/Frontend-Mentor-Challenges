const qrCodeContainer = document.getElementById("qrCodeTileContainer");

const qrCodeTiles = Array.from({ length: 855 }).map((_, i) => {
  const tileEl = document.createElement("div");
  tileEl.classList.add("qr-code-tile");

  let rowIndexTop = i / 16;

  if (i <= 102 && Math.floor(rowIndexTop) === rowIndexTop)
    tileEl.style.gridColumn = 9;

  if (i === 112) tileEl.style.gridColumn = 1;

  const rowIndexBottom = i / 25;

  if (
    Math.floor(rowIndexBottom) + 0.24 === rowIndexBottom &&
    rowIndexBottom + 0.24 > 26
  )
    tileEl.style.gridColumn = 9;

  tileEl.style.animation = `fadeOut 1000ms ${getRadomNumber() + 0.5}s forwards`;

  return tileEl;
});

qrCodeTiles.forEach((tile) => qrCodeContainer.appendChild(tile));

setTimeout(() => qrCodeContainer.remove(), 5500);

function getRadomNumber() {
  return +(Math.random() * 4).toFixed(2);
}
