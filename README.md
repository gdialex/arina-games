# Арина — играю по любви

Персональный демо-сайт: 14 записей в игровой коллекции, фильтры по впечатлениям, ссылки на игры, пять частей Гарри Поттера и фотографии Арины.

## Локальный запуск

```sh
python3 -m http.server 4173 --directory dist
```

Откройте http://localhost:4173.

## Публикация на Vercel

1. В Vercel выберите Add New → Project и импортируйте `gdialex/arina-games`.
2. Framework Preset: Other. Root Directory: корень репозитория.
3. Output Directory: `dist`. Build Command и Install Command оставьте пустыми.
4. Нажмите Deploy. Переменные окружения не требуются.

`vercel.json` уже задаёт директорию публикации. Сайт полностью статический, без API, ключей, сборки или зависимостей.

## Редактирование

- `dist/index.html` — структура страницы.
- `dist/style.css` — оформление и адаптивность.
- `dist/app.js` — каталог и интерактивность.
- `dist/assets/` — локальные фотографии и обложки.
- `ASSETS.md` — источники обложек.

Репозиторий публичный по решению владельца. Фотографии предоставлены владельцем для этого сайта.

## Vercel CLI

Проект Vercel: `arina-games-2v1t`, команда: `alexandrvotyakov-1931s-projects`.

```sh
npx vercel link --project arina-games-2v1t --scope alexandrvotyakov-1931s-projects
npx vercel deploy --prod
```

Авторизация хранится локально вне репозитория. Файлы `.env*` и `.vercel/` исключены из Git.
