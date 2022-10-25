/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
const Magnify = (event, imgID, zoom) => {
  let img;
  let glass;
  let w; let h;
  let bw;
  img = document.getElementById(imgID);
  glass = document.getElementById('img_magnifier_glass');
  glass.style.display = 'block';
  glass.style.backgroundImage = `url('${img.src}')`;
  glass.style.backgroundRepeat = 'no-repeat';
  glass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  moveMagnifier(event);
  function moveMagnifier(e) {
    let pos; let x; let y;
    e.preventDefault();
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
    if (x < w / zoom) { x = w / zoom; }
    if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
    if (y < h / zoom) { y = h / zoom; }
    // to show over the image
    glass.style.left = `${x - w + 50}px`;
    glass.style.top = `${y - h - 50}px`;
    // glass.style.left = `360px`;
    // glass.style.top = `0px`;
    glass.style.backgroundPosition = `-${(x * zoom) - w + bw}px -${(y * zoom) - h + bw}px`;
  }
  function getCursorPos(e) {
    let a; let x = 0; let y = 0;
    e = e || window.event;
    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x -= window.pageXOffset;
    y -= window.pageYOffset;
    return { x, y };
  }
};

export default Magnify;
