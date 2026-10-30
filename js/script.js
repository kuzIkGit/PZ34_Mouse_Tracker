"use strict";

const area = document.querySelector("#track-area");
const dot = document.querySelector("#pointer-dot");
const xText = document.querySelector("#coord-x");
const yText = document.querySelector("#coord-y");
const statusEl = document.querySelector("#track-status");

// Задание 1
area.addEventListener("mouseover", () => {
    area.classList.add("is-inside");
    statusEl.textContent = "Указатель внутри площади.";
});

// Задание 2
area.addEventListener("mousemove", (event) => {
    const x = Math.round(event.offsetX);
    const y = Math.round(event.offsetY);
    xText.textContent = x;
    yText.textContent = y;
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
});

// Задание 3
area.addEventListener("mouseout", () => {
    area.classList.remove("is-inside");
    xText.textContent = "-";
    yText.textContent = "-";
    statusEl.textContent = "Курсор вне площадки";
});

