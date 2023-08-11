[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/sRKW9Tsr)

# Week 8 Assignment :  Develop and Deploy Express JS App with its API into A Backend Web Hosting with CRUD Implementation (https://fintrackfirekuru.fly.dev/fintracks)

This week PT. Revolusi Cita Edukasi gives instruction to the author to develop and to deploy an Express JS App with ist API into a Backend Web Hosting with Create Read Update and Delete conception implementation (CRUD).

The Backend, Express JS app development is based on week - 7 assignment which is financial tracking app which still used Frontend development using typescript. Nevertheless, it shows the data submitted by user. The difference is in week 8, the assignment is about development and deployment of Backend financal tracking app using Express JS and written on typescript. 

## FIRE with Kuru Backend Financial Track App Development Process

Before any deployment, author develop typescript codes for this app and implement CRUD through GET, POST, PUT, PATCH and DELETE method for API. Hence, postman app installation is needed to check the typescript codes. Nevertheless, when writing codes on typescript. Author prepared first to install some package such as package.json, package-lock.json, tsconfig.json (including ourdir to dist folder for javascript files compiled by typescript), pnpm-lock.yaml and make some files such as .gitignore, .env. Then, Author separate data into data.ts file to be exported into index.ts file so then it could reduce length of the codes. Keep in mind tsconfig and index.ts files should be check to make export and import process smooth. 

For all the files that author mentioned. Author reuse some package files from othe local reository that has been used for week 8 trainning sessions to reduce time making pakcages through powershell terminal. So, then author only use some commands for powershell terminal to ensure package and node_modules are installed on the same folder with typescript code files and finally in order to check in postman. these are the commands :

```
npm i pnpm

pnpm i

pnpm run dev
```
Make sure again that all pacakages are installed and exist on package.json file's Dependencies and devDependencies  such as :

```
    "body-parser": "^1.20.2",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "pnpm": "^8.6.12"

    "@flydotio/dockerfile": "^0.4.3",
    "@types/body-parser": "^1.19.2",
    "@types/express": "^4.17.17",
    "@types/node": "^20.4.9",
    "concurrently": "^8.2.0",
    "nodemon": "^3.0.1",
    "typescript": "^5.1.6"
```
## FIRE with Kuru Backend Financial Track App Deployment Process

First things first make sure to sign up on fly.io and modify billing via dashboard menu and add debit card number, thru date and cvc so that fly.io hobby plan could be used to deploy the backend Express JS app. Author has Visa Debit Card with IDR first double digits balance used for this because, when Author used a Master Card Debit with lower balance, the fly.io said the balance is insufficent so then it could not be used for deployment. If the fly.io configuration process is done the please do these steps:  

1. open windows terminal or cmd command prompt or both of them coz one of them could be fail to recognized flyctl command
2. open directory folder that has typescript and other code files. for instance :
```
cd "C:\Users\Aldi Andalan\Documents\revou\week-8-andalanaldi\"
```
3. run __winget install --id Microsoft.Powershell --source winget__
4. install fly.io on laptop via run this command:
```
pwsh -Command "iwr https://fly.io/install.ps1 -useb | iex"
```
5. run __flyctl auth__ login to login into fly.io
6. run __flyctl launch__ , enter or give name to app name but **Name may only contain numbers, lowercase letters and dashes** and press enter on Singapore region wait until finished
7. run __flyctl deploy__ to deploy express app into fly.io for Backend hosting
8. While waiting for deployment check if there is warning about **"The app is not listening on the expected address and will not be reachable by fly-proxy."**. If theat warning is founded then please recheck, edit or modify port on typescript codes or env, adjust port to be the same with fly.io port that is shown on warning message on terminal and give const secret fow access token if necessary.
9. If there is no warning and URLs for monitroing and deployment address have been given by fly.io through terminal. Then the deployment is succeeded and the address could be checked thorugh browser app.

On the terminal (command prompt) in windows, fly.io gives monitoring link and deployment link such as:

https://fly.io/apps/fintrackfirekuru/monitoring
https://fintrackfirekuru.fly.dev/

To check whether the backend has been deployed please visit:

https://fintrackfirekuru.fly.dev/fintracks

The data is successfully shown through that last link above. if there is any question you can contact author through andalanaldi@gmail.com .
