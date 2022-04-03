# NetSpeed
Analysing your Network Speed was never this easy. — NetSpeed rund speed-tests in your server and gives you all kind of information in a local webpage. 

# Getting started
## Installing Node.js
You need [Node.js](https://nodejs.org) installed to run this.

## Installing the packages
Type this into your terminal:

```
npm install fast-speedtest-api connect serve-static fs
```

All required packages should now be installed.

## Run
First, lets run `database.js`.

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


If it runs, you may now start the webserver.

Direct to the `src`-folder again:
```
cd src
```

And run the script:

```
node server.js
```
