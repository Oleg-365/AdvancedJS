// Экспорт
// Чтобы получить доступ к объектам модулей, надо их экспортировать

export const name = 'square'; // ключевое слово export

export function draw(ctx, lenght, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, lenght, lenght);

    return {
        lenght: lenght,
        x: x,
        y: y,
        color: color
    };
}

// внутри блоков экспортировать нельзя

// Импорт
import { name, draw, reportArea, reportPerimeter } from './modules/square.js';

import * as Square from './modules/square.js'; // Импортировать все, что можно