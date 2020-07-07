import clamp from "https://unpkg.com/lodash-es@^4.0.0/clamp.js";

document.getElementById("year").innerText = clamp(2020, 1996, 1999);
