# Проект Frontend-тестов

Этот проект содержит фронтенд-тесты для приложения, а также фикстуры, моки и конфигурации для отчетов.

## Структура проекта

- **fe-tests/**: Основная директория для фронтенд-тестов.
  - **fe-tests/fixtures/**: Содержит фикстуры для тестов и файл `index.ts`.
  - **fe-tests/tests/**: Содержит файлы тестов.
    - **fe-tests/tests/setup/**: Содержит файл авторизации и `.json` файл для конфигурации авторизации.
  - **fe-tests/mocks/**: Содержит мок-данные в файле `mocks.ts`.

## Настройка тестов

- **HTML Reporter**: Интегрирован с Allure-Playwright и HTML-Reporter для генерации отчетов по тестам.
- **Отчеты**: Отчеты по тестам доступны по [ссылке на Яндекс.Диск](https://disk.yandex.com/d/random-link-placeholder).

## Инструкции по настройке

1. Установите зависимости:
   ```bash
   npm install
   ```

2. Запустите тесты:
   ```bash
   npx playwright test --ui
   ```

## Запуск тестов

- Для запуска всех тестов:
  ```bash
  npx playwright test --ui
  ```

- Для запуска конкретных тестов укажите файл или директорию:
  ```bash
  npx playwright test fe-tests/tests/<test-file> --ui
  ```

## Генерация отчетов

- Для создания HTML-отчета:
  ```bash
  npx serve html-report
  ```

- Для создания Allure-отчета:
  ```bash
  allure serve allure-results
  ```

Отчеты доступны по [ссылке на Яндекс.Диск](https://disk.yandex.com/d/random-link-placeholder).

## Примечания

- Убедитесь, что файл `.json` для авторизации в `fe-tests/tests/setup` настроен корректно перед запуском тестов.
- Мок-данные в `fe-tests/mocks/mocks.ts` можно настроить по необходимости.