# **Google Books Search**

[![React Badge](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)](#) [![MonogoDB Badge](https://img.shields.io/badge/-MongoDB-4DB33D?style=for-the-badge&labelColor=black&logo=mongodb&logoColor=3FA037)](#) [![ExpressJS Badge](https://img.shields.io/badge/-Express.JS-ff781f?style=for-the-badge&labelColor=black&logo=express&logoColor=FF781F)](#) [![Nodejs Badge](https://img.shields.io/badge/-Node.js-3C873A?style=for-the-badge&labelColor=black&logo=node.js&logoColor=3C873A)](#) [![Boostrap Badge](https://img.shields.io/badge/-bootstrap5-553c7b?style=for-the-badge&labelColor=black&logo=bootstrap&logoColor=553c7b)](#)

### :rocket: **Deployed on Heroku**

https://dragontalker-library.herokuapp.com/

---

### **Table of Contents**

- [Description](#description)
- [How to Use](#how-to-use)
- [How to Install](#how-to-install)
- [License](#license)
- [Author Info](#author-info)

# Description

:mag_right: `MERN` stands for MongDB, Express.js, React.js and Node.js. This MERN application allows user to search books from Google Books api and saved to MongoDB through Express servers. Furthermore, this is a SPA (single page application) where routing between different page is handled by React Router.

## :wrench: **Technologies Used**

- React
- React Hooks
- React Routers
- Express.js
- Node.js
- RESTful Api
- MongoDB
- Mongoose
- Bootstrap 5
- HTML 5
- CSS 3
- JavaScript
- VS Code
- Heroku

[Back to the Top](#google-books-search)

# How to Use

:crystal_ball: This application includes two features: search and save.

## :mag: Feature: Search Page

After launching the application, the user will be place in the search page. This search function allows user to find results from Google Books API. The screenshot below shows the search result for keyword `typescript`. Each returned results are presented in a card, which contains two functions: view eBook on Google Books, or saved this book to user's personal library.

![app screenshot](./Assets/screenshot_1.png)

[Back to the Top](#google-books-search)

## :floppy_disk: Feature: Saved Page

Clicking on the `Saved` link on the top right corner will take user to the saved page. This is user's personal library which contains all the books saved from previous searches. Each book card contains two functions as well: viewing eBook works exactly the same way, while deleting function allows user to remove the unwanted book from their library.

![app screenshot](./Assets/screenshot_2.png)

[Back to the Top](#google-books-search)

# How to Install

:cd: For local installtion, both front-end and back-end need to be installed:

```bash
# Install back-end
npm install

# Install front-end
cd client
npm install
```

[Back to the Top](#google-books-search)

## :computer: Start Development

After installtion completed, use the following commands to start development:

```bash
# Initiate front-end only
npm run client

# Initiate back-end only
npm run watch

# Initiate full-stack using concurrent mode
# React development server is hosted at http://localhost:3000
# Express server is at hosted at http://localhost:8080
npm run dev
```

[Back to the Top](#google-books-search)

# License

:mortar_board: MIT License

Copyright (c) [2021] [Richard Yang]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[Back to the Top](#google-books-search)

# Author Info

:space_invader: Tong (Richard) Yang is a full stack software engineer from Canada, living Toronto Area. If you have any questions, email him at richard.yang.tong@gmail.com or visit his [GitHub](https://github.com/Dragontalker).

[Back to the Top](#google-books-search)
