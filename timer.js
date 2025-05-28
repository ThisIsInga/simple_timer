let timerElement = document.getElementsByClassName('timer')[0];

function updateTimerDisplay() {
    const now = new Date(); // Получаем текущее время
    const hour = now.getHours(); // Получаем часы
    const minute = now.getMinutes(); // Получаем минуты
    const second = now.getSeconds(); // Получаем секунды

    timerElement.innerHTML = `
    <pre><span class="orange">const</span> clock: <span class="orange">=</span> {
   hour: "${String(hour).padStart(2, '0')}",
   minute: "${String(minute).padStart(2, '0')}",
   second: "${String(second).padStart(2, '0')}",
};
    </pre>
    `;
}

// Обновляем отображение каждую секунду
setInterval(updateTimerDisplay, 1000);

// Вызываем функцию один раз, чтобы сразу отобразить текущее время
updateTimerDisplay();
