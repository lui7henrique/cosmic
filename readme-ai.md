<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>COSMIC</h1>
<h3>◦ Unleash the Universe in Your Code with Cosmic!</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat-square&logo=Prettier&logoColor=black" alt="Prettier" />
<img src="https://img.shields.io/badge/.ENV-ECD53F.svg?style=flat-square&logo=dotenv&logoColor=black" alt=".ENV" />
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat-square&logo=PostCSS&logoColor=white" alt="PostCSS" />
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat-square&logo=Autoprefixer&logoColor=white" alt="Autoprefixer" />
<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat-square&logo=YAML&logoColor=white" alt="YAML" />
<img src="https://img.shields.io/badge/sharp-99CC00.svg?style=flat-square&logo=sharp&logoColor=white" alt="sharp" />

<img src="https://img.shields.io/badge/Vitest-6E9F18.svg?style=flat-square&logo=Vitest&logoColor=white" alt="Vitest" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat-square&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat-square&logo=Axios&logoColor=white" alt="Axios" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat-square&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/lui7henrique/cosmic?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/lui7henrique/cosmic?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/lui7henrique/cosmic?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/lui7henrique/cosmic?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running cosmic](#-running-cosmic)
    - [🧪 Tests](#-tests)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

HTTPStatus Exception: 429

---

## 📦 Features

HTTPStatus Exception: 429

---


## 📂 Repository Structure

```sh
└── cosmic/
    ├── .env
    ├── .eslintrc.json
    ├── components.json
    ├── next-env.d.ts
    ├── next.config.js
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.js
    ├── prettier.config.js
    ├── public/
    ├── src/
    │   ├── app/
    │   │   ├── globals.css
    │   │   ├── layout.tsx
    │   │   ├── page.tsx
    │   │   └── timeline/
    │   ├── components/
    │   │   ├── date-dialog/
    │   │   ├── date-picker/
    │   │   ├── feed-client/
    │   │   ├── feed-item/
    │   │   ├── feed-item-explanation/
    │   │   ├── feed-item-skeleton/
    │   │   ├── feed-server/
    │   │   ├── theme-provider/
    │   │   ├── theme-toggle/
    │   │   ├── timeline/
    │   │   ├── timeline-item/
    │   │   └── ui/
    │   ├── lib/
    │   │   └── utils.ts
    │   ├── services/
    │   │   └── planetary/
    │   └── utils/
    │       ├── date/
    │       ├── format-to-api.ts
    │       ├── format-to-ui.ts
    │       └── get-avatar-copyright.ts
    ├── tailwind.config.js
    ├── test/
    │   └── setup.ts
    ├── tsconfig.json
    └── vitest.config.ts

```

---


## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                                                                   | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                                    | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [.env](https://github.com/lui7henrique/cosmic/blob/main/.env)                                                          | This is a Next.js application called "cosmic" with standard devops support (eslint, prettier, package.json) and a custom Tailwind CSS config. The app employs a server/client model and uses components like UI elements, date picker, theme toggle, and a timeline. Key application data is acquired from NASA's API. Utility functions involve date formatting and fetching avatar copyrights. All services are organised under "services". Tests are setup in a separate directory.                                                                                                       |
| [.eslintrc.json](https://github.com/lui7henrique/cosmic/blob/main/.eslintrc.json)                                      | The code represents a directory structure for a Next.js application, `cosmic`. It contains configurations for ESLint, PostCSS, Prettier, and Tailwind CSS. The'src' directory has components, utilities, and app-global styles. The'components' folder further includes various reusable UI elements. Application-wide utilities, date formatting functions, and a'planetary' service are inside the'services' and'utils' folder. The ESLint configuration extends'next/core-web-vitals' and'@rocketseat/eslint-config/next', and turns off the'no-use-before-define' rule.                  |
| [components.json](https://github.com/lui7henrique/cosmic/blob/main/components.json)                                    | The depicted project structure suggests a Next.js application utilizing Typescript, Tailwind CSS, and Eslint for code readability. The'components.json' configures project schema, UI style, and resource inclusion. It sets Tailwind configurations, defining base color, and usage of CSS variables. Moreover, it establishes aliases for components and utilities for more efficient coding. The'src' directory holds app layout, different UI components, utility functions, and services, probably meant for interacting with external APIs.                                            |
| [next-env.d.ts](https://github.com/lui7henrique/cosmic/blob/main/next-env.d.ts)                                        | The provided code is the structure of a Next.js application called'cosmic'. It has configuration files at the root and inside, UI components, application-specific files, utility functions, and services. Files like '.env' and'tsconfig.json' handle environment variables and TypeScript configuration respectively. The'src/' directory consists of the core application, UI components, utility functions, and services. The'next-env.d.ts' file declares types for Next.js features, including Next.js internal image formats. This file should not be altered per Next.js guidelines. |
| [next.config.js](https://github.com/lui7henrique/cosmic/blob/main/next.config.js)                                      | The code is the configuration for a Next.js project named'cosmic'. The project is using TypeScript and has components, services, utilities, and tests structured within a src directory. The `next.config.js` file allows the use of images from'apod.nasa.gov' and removes properties in React code during compilation. The project also has configuration files for ESLint, Prettier, PostCSS, and TailwindCSS, and uses `pnpm` for package management.                                                                                                                                    |
| [package.json](https://github.com/lui7henrique/cosmic/blob/main/package.json)                                          | The code represents a NASA timeline project directory structure. It includes TypeScript, Next.js, React, and testing scripts. Key functionalities involve handling theme toggling, date picking, and data from a planetary service. The code also contains specific libraries for user interface elements, utilities, and API formats. The'package.json' script configures development, building, starting, testing, and linting tasks via Next.js and Vitest, and outlines various project dependencies and developer dependencies.                                                         |
| [pnpm-lock.yaml](https://github.com/lui7henrique/cosmic/blob/main/pnpm-lock.yaml)                                      | This is a Next.js application following a modular architecture. It structures its source code into components, GUI, libraries, services, and utilitarian functions. Theming is also incorporated. The code mentions a lock file, ensuring dependencies to have consistent versions across an environment, highlighting certain settings like'autoInstallPeers'. The structure indicates thorough linting and testing setup, thus enforcing code quality. The application deals with dates and feeds, possibly for a timeline-based feature.                                                  |
| [postcss.config.js](https://github.com/lui7henrique/cosmic/blob/main/postcss.config.js)                                | The directory structure presented represents a Next.js app using TypeScript, Tailwind CSS and a series of custom components and utility libraries. The components are organised into separate folders, including theme providers, timeline-related components, feed items and a date picker. Additional utilities handle date management and formatting. Package settings and configurations for tools including ESLint, Prettier, and tests are included. The specific `postcss.config.js` code enables Tailwind CSS and Autoprefixer as PostCSS plugins.                                   |
| [prettier.config.js](https://github.com/lui7henrique/cosmic/blob/main/prettier.config.js)                              | The provided code shows a directory structure and a configuration file for a Next.js application that uses Tailwind CSS for styling. The app has various components, utilities, services, and configs. The'prettier.config.js' file ensures the application code follows a consistent style by using the Prettier formatting tool along with a Tailwind CSS plugin.                                                                                                                                                                                                                          |
| [tailwind.config.js](https://github.com/lui7henrique/cosmic/blob/main/tailwind.config.js)                              | The'tailwind.config.js' configures the Tailwind CSS framework for a JavaScript project with dark mode and responsive design. The configuration also extends the theme, defining color schemes, animations, border radius, and maximum width. It scans specific directories for class usage in'ts' and'tsx' files. The file also includes a plugin for CSS animations. The project structure indicates a standard Next.js application setup with a variety of components, utilities, configuration files, and a'src' directory containing the application's source code.                      |
| [tsconfig.json](https://github.com/lui7henrique/cosmic/blob/main/tsconfig.json)                                        | This directory tree represents a Next.js project structure with TypeScript configuration. The'src' directory contains application logic, UI components, utilities and services. The'test' setup and project configuration files like'next.config.js,''tsconfig.json,' are found at the root level. Tsconfig.json configures TypeScript, targeting es5, allowing JavaScript files, enforcing strict type-checking, resolving JSON modules, preserving JSX syntax, and includes paths for project files, excluding'node_modules'.                                                              |
| [vitest.config.ts](https://github.com/lui7henrique/cosmic/blob/main/vitest.config.ts)                                  | The provided code represents a directory structure of a project called'cosmic', which appears to use Next.js, TypeScript, and CSS technologies. The configuration file'vitest.config.ts' sets up testing using Vitest, specifies JSdom as the environment, and initialization file'test/setup.ts'. It provides multiple reports on code coverage, enables aliases for simplified imports and integrates React via ViteJS plugins.                                                                                                                                                            |
| [globals.css](https://github.com/lui7henrique/cosmic/blob/main/src\app\globals.css)                                    | The code includes a directory tree for a web project, using Next.js with TypeScript. Most functionalities are divided among components, utils, services, and app located under the'src' folder. The provided CSS file (globals.css), utilizes the Tailwind CSS utility-first framework to define base styles, including various color variables for different UI elements (background, foreground, cards, popovers) in light and dark modes, radius, and some'apply' directives for universal (*) and body elements.                                                                         |
| [layout.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\app\layout.tsx)                                      | The code represents the root layout of a web application named'Cosmic'. It uses Next.js, TypeScript, and a Roboto Mono Google font. The application incorporates theming, provided by ThemeProvider, and a theme toggle component, denoting a user option to switch themes. The layout houses all other components (children prop), indicating the shared structural elements across the application. Metadata is defined, giving basic description information about the app.                                                                                                               |
| [page.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\app\page.tsx)                                          | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [page.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\app\timeline\page.tsx)                                 | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [page.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\app\timeline\[date]\page.tsx)                          | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [index.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\date-dialog\index.tsx)                     | The given code constructs a `DialogDate` React component for rendering interactive dialog boxes. It uses a date as input and retrieves astronomy picture of the day (APOD) data for the given date from a planetary service. While data is loading or unavailable, it presents a dialog with a skeleton version of the feed item. When data is obtained successfully, it displays the retrieved feed item inside the dialog box.                                                                                                                                                             |
| [index.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\date-picker\index.tsx)                     | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [index.test.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\feed-client\index.test.tsx)           | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [index.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\feed-client\index.tsx)                     | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [index.test.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\feed-item\index.test.tsx)             | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [index.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\feed-item\index.tsx)                       | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [index.test.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\feed-item-explanation\index.test.tsx) | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [index.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\feed-item-explanation\index.tsx)           | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [index.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\feed-item-skeleton\index.tsx)              | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [index.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\feed-server\index.tsx)                     | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [index.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\theme-provider\index.tsx)                  | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [index.test.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\theme-toggle\index.test.tsx)          | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [index.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\theme-toggle\index.tsx)                    | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [index.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\timeline\index.tsx)                        | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [index.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\timeline-item\index.tsx)                   | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [avatar.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\ui\avatar.tsx)                            | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [badge.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\ui\badge.tsx)                              | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [button.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\ui\button.tsx)                            | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [calendar.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\ui\calendar.tsx)                        | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [dialog.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\ui\dialog.tsx)                            | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [dropdown-menu.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\ui\dropdown-menu.tsx)              | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [input.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\ui\input.tsx)                              | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [popover.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\ui\popover.tsx)                          | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [select.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\ui\select.tsx)                            | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [separator.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\ui\separator.tsx)                      | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [skeleton.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\ui\skeleton.tsx)                        | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [tooltip.tsx](https://github.com/lui7henrique/cosmic/blob/main/src\components\ui\tooltip.tsx)                          | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [utils.ts](https://github.com/lui7henrique/cosmic/blob/main/src\lib\utils.ts)                                          | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [index.ts](https://github.com/lui7henrique/cosmic/blob/main/src\services\planetary\index.ts)                           | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [types.ts](https://github.com/lui7henrique/cosmic/blob/main/src\services\planetary\types.ts)                           | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [format-to-api.ts](https://github.com/lui7henrique/cosmic/blob/main/src\utils\format-to-api.ts)                        | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [format-to-ui.ts](https://github.com/lui7henrique/cosmic/blob/main/src\utils\format-to-ui.ts)                          | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [get-avatar-copyright.ts](https://github.com/lui7henrique/cosmic/blob/main/src\utils\get-avatar-copyright.ts)          | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [format-raw-date.ts](https://github.com/lui7henrique/cosmic/blob/main/src\utils\date\format-raw-date.ts)               | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [setup.ts](https://github.com/lui7henrique/cosmic/blob/main/test\setup.ts)                                             | HTTPStatus Exception: 429                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

</details>

---

## 🚀 Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- ℹ️ Dependency 1`

`- ℹ️ Dependency 2`

`- ℹ️ ...`

### 🔧 Installation

1. Clone the cosmic repository:
```sh
git clone https://github.com/lui7henrique/cosmic
```

2. Change to the project directory:
```sh
cd cosmic
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Running cosmic

```sh
npm run build && node dist/main.js
```

### 🧪 Tests
```sh
npm test
```

---


## 🛣 Project Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Implement Y`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/lui7henrique/cosmic/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/lui7henrique/cosmic/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/lui7henrique/cosmic/issues)**: Submit bugs found or log feature requests for LUI7HENRIQUE.

#### *Contributing Guidelines*

<details closed>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone <your-forked-repo-url>
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License


This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#Top)

---

