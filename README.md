# moaqee

## A Lightweight Blog System

**No external software required.** 100% JavaScript.

<img src="https://i.imgur.com/mMxIxE3.png">
<img src="https://i.imgur.com/oyLauNb.png">

## Setup

```
git clone https://github.com/private-yusuke/moaqee.git
cd moaqee
npm install
```
then, `cd bin` and `./www`.

If it is the first time you run `./www` (or there's no `settings.js` file), `settings.js` will automatically be generated whose content is exactly the same as `settings-sample.js`. **Do not modify `settings-sample.js` file or your moaqee will be broken.**

## Settings

Available to change the settings by editing `settings.js`.

| Property | Type | Description |
|:--------:|:----:|:-----------:|
| port | unsigned number | The port number for moaqee. |
| blog.title | String | |
| blog.desc | String | The description of your blog. |
| blog.articlesPerPage | unsigned number | The amount of how many articles will be shown in 1 page. |