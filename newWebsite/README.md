# README

```
resource
├── data-style.css
├── datasource.html
├── demo.html
├── demo1.html
├── example.html
├── login.html
├── index.html
├── handouts
│   ├── ...
│   ├── (some.html added header and footer)
│   └── raw_data
│       ├── ...
│       └── (some.html export from mardown)
├── js
│   ├── createJSON.js
│   ├── demo.js
│   ├── draw.js
│   ├── handout_list.json
│   ├── keyword.js
│   ├── renderCodeList.js
│   └── renderList.js
└──style.css
```



## To edit apperance of the div in `index.html`

You have to edit the `handout_list.json` file in the `js/` folder.

The file contains an array with n js object, each object is defined as below:

```json
{
 "title":"Lecture 1: Regression - Case Study",
 "subtitle":"李宏毅",
 "content":"",
 "url_list":[{"url_type":"講義","url":"./handouts/ML1.html"}, 
             {"url_type":"影片","url":"www.youtube.com"}]
}
```

, which will be shown as

![Screen Shot 2020-09-25 at 7.57.05 PM](https://github.com/TAITKit/dogo/blob/master/Screen%20Shot%202020-09-25%20at%207.57.05%20PM.png?raw=true)

- title: as shown above is the title of the div
- subtitle: as shown above is the grey subtitle of the div
- content: which should be the black text between the title and urls
- url_list: a array contains objects with different kinds of links, `url_type` is the rendered text, `url` is the link itself
- 