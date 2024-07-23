"use strict";
// Данные
const data = [
  {
    name: "Руки Вверх!",
    data: {
      1997: "Дышите равномерно",
      1998: "Сделай еще громче!",
      2001: "Маленькие девочки",
      2002: ["Конец попсе,танцуют все", "Территория"],
    },
  },
  {
    name: "Сергей Жуков",
    data: {
      2007: "В поисках нежности",
      2008: "Звезды падают",
      2012: "Открой мне дверь!",
    },
  },
];
// Музыкальная коллекция
const musicCollection = {
  albums: [],
  addAlbum(artist, title, year) {
    this.albums.push({ title, artist, year });
  },
  [Symbol.iterator]: function () {
    let count = 0;
    return {
      next: () =>
        count < this.albums.length
          ? { value: this.albums[count++], done: false }
          : { done: true },
    };
  },
};
// Заполнение
Object.values(data).forEach((artist) => {
  Object.entries(artist.data).forEach((e) => {
    const [year, album] = e;
    if (album instanceof Array) {
      album.forEach((album) =>
        musicCollection.addAlbum(artist.name, album, year)
      );
    } else {
      musicCollection.addAlbum(artist.name, album, year);
    }
  });
});
// Вывод
for (const el of musicCollection) {
  console.log(`${el.title} - ${el.artist} (${el.year})`);
}
