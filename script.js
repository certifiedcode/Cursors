console.log("Cursors Initialized")
const cursorValue = Object.keys(_cursorsConfig).map((key) => `url('${_cursorsConfig[key]}') ,${key.toLowerCase()}`).join(', ');
document.body.style.cursor = cursorValue;
