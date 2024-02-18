import bubbleChart from "../js/Charts/Bubble/bubbleChart.js";
import populateSelectFilters from "../js/Tools/PopulateFunctions/populateSelectFilters.js"


let dragged;

function dragStart(event) {
    dragged = event.target;
}

document.addEventListener('DOMContentLoaded', function () {
    const circulos = document.querySelectorAll('.circulo');

    circulos.forEach(function (circulo) {
        circulo.draggable = true;
        circulo.addEventListener('dragstart', dragStart);
    });
});

document.addEventListener('dragover', function (event) {
    event.preventDefault();
});

document.addEventListener('drop', function (event) {
    event.preventDefault();
    const targetCircle = event.target.closest('.circulo');
    if (targetCircle && targetCircle !== dragged) {
        const rect = targetCircle.getBoundingClientRect();
        const offset = event.clientY - rect.top;
        const isAboveCenter = offset < rect.height / 2;

        if (isAboveCenter) {
            targetCircle.before(dragged);
        } else {
            targetCircle.after(dragged);
        }
        // Chamando bubbleChart() após a troca de elementos
        bubbleChart();
    }
});

d3.csv("./data/see_course2060_quiz_list.csv").then(data => {
    populateSelectFilters(data)
});

bubbleChart()

document.addEventListener("DOMContentLoaded", function () {
    var backToTopBtn = document.getElementById("backToTopBtn");

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.parentElement.style.display = "block";
        } else {
            backToTopBtn.parentElement.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});