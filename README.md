This repository contains comprehensive user documentation for all various Witivio apps within Teams.

# Getting started

## Prerequisites
- Node.js 10+
- Yarn

## Quick Start
```
cd src
yarn install
npx vuepress build
npx vuepress dev
```

## Add topic

- Add a new topic to the sidebar : 
    - **Create a new .md file** in one of the existing applications located in the directory ./src/solutions/
    - In the file (./src/.vuepress/config.js), find the name of the application for which you want to add a topic, then add the link (**relative path starting with '/documentation/where/is/your/new/topic'**) of your new topic to the "children" array of the application and add the name that you want to be up on the website by adding **['/documentation/where/is/your/new/topic', "Any name that you want there"]**.

## Design modification

- Change the design about anything else than the header and the sidebar :
    - You can do this in the different components file located here **./src/.vuepress/theme/components/**.

- Change the design about the header or the sidebar :
    - You must do this in the file **./src/.vuepress/styles/index.styl**.
    - Do not forget that all changes to the design that you can do is only on the different html tag already existing because of the vuepress template you can't add any new html tag or new css class.
    - Also if you want to modify a value that is already set by the existing template, you have to add **!important** to the line to overwrite the existing one (exemple: "flex-direction: row-reverse !important;" will overwrite "flex-direction: column;" set by the template).

## Add a new app

- First of all, you have to add it to the homepage so you have to modify the file ./src/readme.md by **adding a new item** with a title, an itemImage, an itemDescription and a link to the path where you want to redirect when you click on the app button.

- Then add a new directory with the app name to the directory **./src/solutions/** and the different mandatory file/repository into it.

- Any app need to have the 6 main topics (**Get started, Fundamentals, What's new, Tutorials, Limits, Changelog**) and an **Overview** with all the redirect button to the different topics.

- Then to see your topics on the documentation page and in the sidebar you have to add them to the config.js, **Refer to the "Add topic"** ahead of this readme.


## Header modification

- All the modification that you can do about the header is in the file **./src/.vuepress/config.js**

- In the **"locales"** array you can add anything that you want to appear in the header, then you can find the **"nav"** array where you can add onclick text.

## Creata a new component

- Add your new component file as a **.vue** in the directory **./src/.vuepress/theme/components/**

- In the component file you can write **html, css and javascript** code, you have to **name your file in the export default by creating a variable named "name: 'Component name'"**

- Then you have to make it as a global thing so you have to call it in the ./src/.vuepress/enhanceApp.js and to **define it with "Vue.component("ComponentName", Component)"**

- When it's done you can call your component in any markdown file by adding **<ComponentName />**

# Folder naming convention
Directory names in lower case. Replace spaces with "-".
Markdown and asset names in lower case. Replace spaces and each non alphanumeric character with "-".
