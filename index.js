/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
const charts = document.getElementById("charts")

fetch('data.json')
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i < data.length; i+=1){
        charts.innerHTML += `
        <div class="container">
            <p class="day small">${data[i].day}</p>
            <div class="chart" style="height:${data[i].amount * 2.5}px;"></div>
            <p class="amount small">$${data[i].amount}</p>
        </div>
    `
        }
        function highlightCurrentDay() {
            const now = new Date();
            const dayOfWeek = now.getDay() -1;
          
            const containers = document.querySelectorAll('.container');
            containers.forEach((container, index) => {
              if (index === dayOfWeek) {
                container.classList.add('current-day');
              }
            });
          }
          highlightCurrentDay();
    })

   
      
    
    