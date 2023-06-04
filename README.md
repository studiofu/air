### Setup

DATABASE_URL=
NEXTAUTH_SECRET=
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=


### dev flow

tailwind

Layout

Navbar
Logo
Search
Menuitem

Modal Page
Hooks
useRegisterModal

Create Register Modal

Input Component

use react-hook-form for form input

use react-hot-toast to show alert message

use prisma orm, install prisma as dev dependent

npx prisma db push

npm install next-auth @prisma/client @next-auth/prisma-adapter

npm install bcrypt
npm install -D @types/bcrypt


create oauth application in github

use github avatar, need to add whitelist in next.config.ts


use google login, enable api login, api services, oauth consent screen

create category under navbar
install query-string
set the query string if the cateogry is clicked



