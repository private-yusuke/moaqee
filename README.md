# moaqee

## A Lightweight Blog System

** No external software required. ** 100% JavaScript.

<img src="https://i.imgur.com/mMxIxE3.png">
<img src="https://i.imgur.com/oyLauNb.png">

## Setup

```
git clone https://github.com/private-yusuke/moaqee.git
cd moaqee
npm install
```
then, `cd bin` and `./www`.

Some articles are already inserted to the Database, so if you want to remove them, you can delete Database.db and `./www` then your new Database is ready to use.

## Settings

Available to change the settings by editing `settings.js`.

| Property | Type | Description |
|:--------:|:----:|:-----------:|
| blog.title | String | |
| blog.desc | String | The description of your blog. |
| blog.articlesPerPage | unsigned number | The amount of how many articles will be shown in 1 page. |