// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена!');
    // Здесь будут наши функции
});
// Функция для изменения настроения страницы
function changePageMood() {
    const moodBtn = document.getElementById('moodBtn');
    const body = document.body;
    
    // Массив настроений страницы
    const moods = [
        { 
            name: 'Спокойствие', 
            gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            color: '#a8edea'
        },
        { 
            name: 'Энергия', 
            gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            color: '#fcb69f'
        },
        { 
            name: 'Концентрация', 
            gradient: 'linear-gradient(135deg, #c2e9fb 0%, #a1c4fd 100%)',
            color: '#a1c4fd'
        },
        { 
            name: 'Вдохновение', 
            gradient: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)',
            color: '#96e6a1'
        }
    ];
    
    let currentMood = 0;
    
    moodBtn.addEventListener('click', function() {
        currentMood = (currentMood + 1) % moods.length;
        body.style.background = moods[currentMood].gradient;
        moodBtn.textContent = `Настроение: ${moods[currentMood].name}`;
        console.log('Настроение изменено на: ' + moods[currentMood].name);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена!');
    changePageMood(); // Вызываем нашу функцию
});
// Функция для работы с трекером привычек
function setupHabitTracker() {
    const habitsList = document.getElementById('habitsList');
    const addHabitBtn = document.getElementById('addHabitBtn');
    
    // Обработчик для кнопок завершения привычки
    function setupCompleteButtons() {
        const completeButtons = document.querySelectorAll('.completeBtn');
        completeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const habit = this.parentElement;
                habit.style.opacity = '0.5';
                habit.style.textDecoration = 'line-through';
                this.textContent = '✓ Выполнено!';
                this.disabled = true;
            });
        });
    }
    
    // Добавление новой привычки
    addHabitBtn.addEventListener('click', function() {
        const habitName = prompt('Введите название новой привычки:');
        if (habitName) {
            const newHabit = document.createElement('div');
            newHabit.className = 'habit';
            newHabit.innerHTML = `
                ${habitName}
                ✓
            `;
            habitsList.appendChild(newHabit);
            setupCompleteButtons(); // Обновляем обработчики для новых кнопок
        }
    });
    
    // Инициализация кнопок при загрузке
    setupCompleteButtons();
}
// Функция для обработки формы целей
function setupGoalsForm() {
    const goalForm = document.getElementById('goalForm');
    const goalsList = document.getElementById('goalsList');
    
    goalForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Предотвращаем стандартную отправку формы
        
        // Получаем данные формы
        const formData = new FormData(goalForm);
        const goal = formData.get('goal');
        const deadline = formData.get('deadline');
        
        // Создаем элемент списка
        const goalItem = document.createElement('li');
        goalItem.innerHTML = `
            ${goal} - до ${deadline}
            ✕
        `;
        
        // Добавляем обработчик удаления
        goalItem.querySelector('.deleteGoal').addEventListener('click', function() {
            goalItem.remove();
        });
        
        goalsList.appendChild(goalItem);
        
        // Очищаем форму
        goalForm.reset();
    });
}
// Функция для показа цитат
function setupQuotes() {
    const dailyQuote = document.getElementById('dailyQuote');
    const newQuoteBtn = document.getElementById('newQuoteBtn');
    
    const quotes = [
        "Самый большой враг знания - не невежество, а иллюзия знания. - Стивен Хокинг",
        "Единственный способ сделать великую работу - любить то, что ты делаешь. - Стив Джобс",
        "Успех - это способность идти от одной неудачи к другой, не теряя энтузиазма. - Уинстон Черчилль",
        "Ваше время ограничено, не тратьте его, живя чужой жизнью. - Стив Джобс",
        "Будьте изменением, которое вы хотите видеть в мире. - Махатма Ганди",
        "Не ошибается тот, кто ничего не делает. Не бойтесь ошибаться - бойтесь повторять ошибки. - Теодор Рузвельт"
    ];
    
    function showRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        dailyQuote.textContent = quotes[randomIndex];
    }
    
    // Показываем случайную цитату при загрузке
    showRandomQuote();
    
    // Обновляем цитату по клику
    newQuoteBtn.addEventListener('click', showRandomQuote);
}
document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена!');
    changePageMood();
    setupHabitTracker();
    setupGoalsForm();
    setupQuotes();
});
addHabitBtn.addEventListener('click', function() {
    const habitName = prompt('Введите название новой привычки:');
    if (habitName) {
        const newHabit = document.createElement('div');
        newHabit.className = 'habit new-item';
        newHabit.innerHTML = `
            ${habitName}
            ✓
        `;
        habitsList.appendChild(newHabit);
        setupCompleteButtons(); // Обновляем обработчики для новых кнопок
    }
});
// Функция для таймера медитации
function setupMeditationTimer() {
    const timerDisplay = document.getElementById('timerDisplay');
    const startBtn = document.getElementById('startTimer');
    const pauseBtn = document.getElementById('pauseTimer');
    const resetBtn = document.getElementById('resetTimer');
    
    let timeLeft = 300; // 5 минут в секундах
    let timerInterval;
    
    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    function startTimer() {
        if (timerInterval) return;
        
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timerInterval);
                alert('Время медитации истекло! Надеемся, вы чувствуете себя спокойнее.');
            }
        }, 1000);
    }
    
    function pauseTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    function resetTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
        timeLeft = 300;
        updateDisplay();
    }
    
    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);
    
    updateDisplay();
}
// Функция для обработки формы целей (ИСПРАВЛЕННАЯ ВЕРСИЯ)
function setupGoalsForm() {
    const goalForm = document.getElementById('goalForm');
    const goalsList = document.getElementById('goalsList');
    
    // Проверяем, существует ли форма
    if (!goalForm) {
        console.error('Форма целей не найдена!');
        return;
    }
    
    goalForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Предотвращаем стандартную отправку формы
        
        // Получаем значения из формы
        const goalInput = document.getElementById('goal');
        const deadlineInput = document.getElementById('deadline');
        
        const goal = goalInput.value.trim();
        const deadline = deadlineInput.value;
        
        // Проверяем, что поля заполнены
        if (!goal || !deadline) {
            alert('Пожалуйста, заполните все поля!');
            return;
        }
        
        // Форматируем дату для красивого отображения
        const formattedDate = new Date(deadline).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        
        // Создаем элемент списка
        const goalItem = document.createElement('li');
        goalItem.className = 'goal-item';
        goalItem.innerHTML = `
            <div class="goal-content">
                <strong>${goal}</strong>
                <span class="goal-deadline">до ${formattedDate}</span>
            </div>
            <button class="deleteGoal" title="Удалить цель">✕</button>
        `;
        
        // Добавляем обработчик удаления
        const deleteBtn = goalItem.querySelector('.deleteGoal');
        deleteBtn.addEventListener('click', function() {
            if (confirm('Вы уверены, что хотите удалить эту цель?')) {
                goalItem.remove();
            }
        });
        
        // Добавляем в список
        goalsList.appendChild(goalItem);
        
        // Очищаем форму
        goalForm.reset();
        
        // Показываем сообщение об успехе
        showNotification('Цель успешно добавлена!');
    });
}

// Функция для показа уведомлений
function showNotification(message) {
    // Создаем элемент уведомления
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Удаляем уведомление через 3 секунды
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Добавляем анимацию для уведомлений
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .goal-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        margin: 0.5rem 0;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 8px;
        border-left: 4px solid #fed6e3;
        animation: fadeIn 0.5s ease;
    }
    
    .goal-content {
        flex-grow: 1;
    }
    
    .goal-deadline {
        display: block;
        color: #666;
        font-size: 0.9rem;
        margin-top: 0.25rem;
    }
    
    .deleteGoal {
        background: #dc3545;
        color: white;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .deleteGoal:hover {
        background: #c82333;
        transform: scale(1.1);
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
ocument.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена!');
    
    // Проверяем и инициализируем все функции
    if (typeof changePageMood === 'function') changePageMood();
    if (typeof setupHabitTracker === 'function') setupHabitTracker();
    if (typeof setupGoalsForm === 'function') setupGoalsForm();
    if (typeof setupQuotes === 'function') setupQuotes();
    if (typeof setupMeditationTimer === 'function') setupMeditationTimer();
    
    console.log('Все функции инициализированы');
});







// Функция для плавной прокрутки к секциям
function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Исправленная функция для трекера привычек
function setupHabitTracker() {
    const habitsList = document.getElementById('habitsList');
    const addHabitBtn = document.getElementById('addHabitBtn');
    
    if (!habitsList || !addHabitBtn) {
        console.log('Элементы трекера привычек не найдены');
        return;
    }
    
    // Функция для настройки кнопок завершения привычки
    function setupCompleteButtons() {
        const completeButtons = document.querySelectorAll('.completeBtn');
        completeButtons.forEach(button => {
            // Удаляем старые обработчики
            button.replaceWith(button.cloneNode(true));
        });
        
        // Добавляем новые обработчики
        const newButtons = document.querySelectorAll('.completeBtn');
        newButtons.forEach(button => {
            button.addEventListener('click', function() {
                const habit = this.parentElement;
                habit.style.opacity = '0.7';
                habit.style.textDecoration = 'line-through';
                this.textContent = '✓ Выполнено!';
                this.style.background = '#6c757d';
                this.disabled = true;
                
                // Показываем уведомление
                showNotification('Привычка выполнена! Отличная работа!');
            });
        });
    }
    
    // Функция для настройки кнопок удаления привычки
    function setupDeleteButtons() {
        const deleteButtons = document.querySelectorAll('.deleteHabit');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const habit = this.parentElement;
                if (confirm('Удалить эту привычку?')) {
                    habit.style.transform = 'translateX(100%)';
                    habit.style.opacity = '0';
                    setTimeout(() => {
                        habit.remove();
                        showNotification('Привычка удалена');
                    }, 300);
                }
            });
        });
    }
    
    // Добавление новой привычки
    addHabitBtn.addEventListener('click', function() {
        const habitName = prompt('Введите название новой привычки:');
        if (habitName && habitName.trim() !== '') {
            const newHabit = document.createElement('div');
            newHabit.className = 'habit new-item';
            newHabit.innerHTML = `
                <span>${habitName.trim()}</span>
                <div class="habit-actions">
                    <button class="completeBtn" title="Отметить выполненным">✓</button>
                    <button class="deleteHabit" title="Удалить привычку">✕</button>
                </div>
            `;
            habitsList.appendChild(newHabit);
            
            // Обновляем обработчики для новых кнопок
            setupCompleteButtons();
            setupDeleteButtons();
            
            showNotification('Привычка добавлена!');
        }
    });
    
    // Инициализация кнопок при загрузке
    setupCompleteButtons();
    setupDeleteButtons();
}

// Функция для показа уведомлений
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? '#28a745' : '#dc3545';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Добавляем CSS анимации для уведомлений
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена!');
    
    // Инициализация всех функций
    setupNavigation(); // Добавьте эту строку
    if (typeof changePageMood === 'function') changePageMood();
    if (typeof setupHabitTracker === 'function') setupHabitTracker();
    if (typeof setupGoalsForm === 'function') setupGoalsForm();
    if (typeof setupQuotes === 'function') setupQuotes();
    if (typeof setupMeditationTimer === 'function') setupMeditationTimer();
    
    console.log('Все функции инициализированы');
});