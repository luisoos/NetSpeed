# 🚀 NetSpeed
Analyzing your Network Speed was never this easy. — NetSpeed runs speed-tests and gives you all kind of information in a local webpage. 

# 📌 Index
- [📂 Documentation](https://github.com/luisoos/NetSpeed/wiki)
- [🤝 Copyright Notices](https://github.com/luisoos/NetSpeed/blob/main/Copyright-Notices.md)
- [🎬 Getting started](https://github.com/luisoos/NetSpeed#-getting-started)
- [👀 Preview](https://github.com/luisoos/NetSpeed/#-preview)
- [📑 Annotations](https://github.com/luisoos/NetSpeed/#-annotations)

# 🎬 Getting started

## Installing Node.js
You need [Node.js](https://nodejs.org) installed to run this.

## Installing the packages
Type this into your terminal:

```
npm install fast-speedtest-api connect serve-static fs
```

All required packages should now be installed.

## Start
First, let's run `database.js`.

> If you stop running this all the data (stored in `data.json`) will be erased!

Enter your Terminal.

Direct to the `src`-folder:
```
cd src
```

And run the script:
```
node database.js
```


If it runs, you may now start the web server.

Open a new terminal and direct to the `src`-folder again:
```
cd src
```

And run the script:

```
node server.js
```

You are now able to view the recorded data on [`http://localhost:8080/index.html`](http://localhost:8080/index.html).

# 👀 Preview
## Webpages
### Dashboard
<img src="https://user-images.githubusercontent.com/81855420/162267750-500a2069-ac69-4612-bacd-b148f33affa4.png" alt="Dashboard screenshot" width="750">

### All recorded Speedtests
<img src="https://user-images.githubusercontent.com/81855420/162267799-1a8f01f2-de32-4480-8192-7ea1b2450b78.png" alt="All recorded Speedtests screenshot" width="750">

# 📑 Annotations
## 🔌 Get your own speed test token
Quick tutorial how to get your own speed test token, which is optional, since I provided mine in the source code.
> Go to fast.com, open your browser DevTools, go on the Network tab and copy the token on the request URL that looks like https://api.fast.com/netflix/speedtest?https=true&token=<the-token>&urlCount=5. **You may be able to filter all requests - search for netflix there.**

With this token, you can change the string in `src/database.js` in line 22.

## 📄 License
This project is licensed under the [`GNU AFFERO GENERAL PUBLIC LICENSE`](https://github.com/luisoos/NetSpeed/blob/main/LICENSE).
