/*
Создать интерактивную веб-страницу, где пользователи могут выбирать различные элементы мебели
(например, столы, стулья, диваны) и их параметры (материал, цвет, стиль). Выбранные параметры должны
быть сохранены так, чтобы при повторном посещении сайта пользователь мог видеть свой ранее собранный
комплект мебели.
1. Пользователи могут выбирать из различных типов мебели (например, столы, стулья, диваны).
2. Для каждого типа мебели доступен выбор параметров (цвет, материал, стиль).
3. Предусмотреть кнопку "Сохранить комплект", при нажатии на которую текущий выбор пользователя
сохраняется в localStorage.
4. При повторном посещении сайта автоматически загружать сохраненные параметры из localStorage и
отображать ранее созданный комплект.
5. Предусмотреть возможность для пользователя очистить сохраненные настройки через специальную
кнопку.
6. После нажатия на кнопку "Сохранить" на странице должен отображаться выбранный комплект.
7. При нажатии на кнопку "Очистить" должно появляться сообщение о том, что выбор не сделан и
предыдущие настройки удалены.
*/

// Функция для сохранения выбранных параметров в localStorage
function saveSettings() {
    const tableValue = document.getElementById('table').value;
    const chairValue = document.getElementById('chair').value;
    const sofaValue = document.getElementById('sofa').value;

    const settings = {
        table: tableValue,
        chair: chairValue,
        sofa: sofaValue
    };

    localStorage.setItem('furnitureSettings', JSON.stringify(settings));
    loadSettings();
}

// Функция для загрузки сохраненных параметров из localStorage
function loadSettings() {
    const savedSettings = JSON.parse(localStorage.getItem('furnitureSettings'));

    if (savedSettings) {
        document.getElementById('table').value = savedSettings.table;
        document.getElementById('chair').value = savedSettings.chair;
        document.getElementById('sofa').value = savedSettings.sofa;
        showResult();
    } else {
        document.getElementById('result').innerText = 'Выбор не сделан. Предыдущие настройки не найдены.';
    }

}

// Функция для очистки сохраненных параметров из localStorage
function clearSettings() {
    localStorage.removeItem('furnitureSettings');
    document.getElementById('result').innerText = 'Выбор не сделан. Предыдущие настройки удалены.';
}

// Функция для отображения выбранного комплекта
function showResult() {
    const tableValue = document.getElementById('table').value;
    const chairValue = document.getElementById('chair').value;
    const sofaValue = document.getElementById('sofa').value;

    const resultText = `Ваш комплект: Стол - ${tableValue}, Стул - ${chairValue}, Диван - ${sofaValue}`;
    document.getElementById('result').innerText = resultText;
}

// Обработчики событий для кнопок
document.getElementById('save').addEventListener('click', saveSettings);
document.getElementById('clear').addEventListener('click', clearSettings);

// Функция для сохранения выбранных параметров в localStorage и обновления отображаемого комплекта
// function saveSettingsAndShowResult() {
// saveSettings();
// showResult();
// }

// Обработчики событий для изменения выбранных параметров
// document.getElementById('table').addEventListener('change', saveSettingsAndShowResult);
// document.getElementById('chair').addEventListener('change', saveSettingsAndShowResult);
// document.getElementById('sofa').addEventListener('change', saveSettingsAndShowResult);

// Загрузка сохраненных настроек при загрузке страницы
loadSettings();
