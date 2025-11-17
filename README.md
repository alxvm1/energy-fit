# Energy Fit Landing Page

Современный landing page для фитнес-клуба Energy Fit, построенный на React + Vite с использованием чистого CSS и BEM методологии.

## Технологии

- **React 18** - UI библиотека
- **TypeScript** - типизация
- **Vite** - сборщик и dev-сервер
- **Swiper.js** - карусели
- **CSS** - стилизация (без Tailwind/SCSS)
- **BEM** - методология именования классов

## Структура проекта

Проект следует архитектуре Feature-Sliced Design (FSD):

```
src/
├── app/           # Инициализация приложения, глобальные стили
├── pages/         # Страницы
├── widgets/       # UI блоки (Navbar, Footer)
├── features/      # Пользовательские взаимодействия
├── entities/      # Бизнес-сущности
└── shared/        # Переиспользуемый код (UI компоненты, ассеты)
```

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для production
npm run build

# Просмотр production сборки
npm run preview
```

## Особенности

- ✅ Современный CSS Reset
- ✅ CSS Custom Properties (Design System)
- ✅ Mobile-first подход
- ✅ BEM методология
- ✅ Swiper.js для каруселей
- ✅ Чистый CSS (без Tailwind/SCSS)

## Браузерная поддержка

Современные браузеры с поддержкой:
- CSS Custom Properties
- CSS Grid
- Flexbox
- Media Queries

