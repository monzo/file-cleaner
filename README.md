# File Cleaner by Monzo

File Cleaner is a plugin that keeps your Sketch files immaculately clean and in order. We’ve written all about why we built it and the way it works [on our blog](monzo.com/blog). 

## What File Cleaner does
By following an artboard naming convention of 100, 101, 102, File Cleaner generates a grid for your canvas and ensures that every screen is in the right place, no matter what you add or where you add it. Here’s what it does to your files:
GIF

### ✨ When you run Validate and Clean, it will:
* Tell you if there’s anything missing (eg. page name, artboards without names)
* Tell you if there’s any duplicate artboards
* Align all the artboards to their correct place in the grid
* Place new artboards in the correct place in their flow
* Re-arrange the left panel so artboards are in the correct order

### 👀 Some examples of how File Cleaner works in practice:
When you add a new screen to the end of your row it’ll give it the correct name and position:
GIF

When you make one artboard taller than the others it’ll adjust the grid to reflect this:
GIF

When you place a screen in the middle of a row, it’ll give it the correct name and update the names of all the following screen:
GIF

### 📄 The parameters for how it works:
* There is one page per file, named Master
* Each flow in the page is on its own row, and starts with a number that denotes it
* Each artboard is named after the flow its in, followed by where it sits in that flow. So, the 5th artboard in the 2nd flow is named 205.

*Top tip: if File Cleaner tells you when you’ve dropped an artboard into the middle of a flow and it has a duplicate name, you can add a suffix to the artboard name (eg “203#”) and it’ll position correctly*.

This is a plugin from Monzo Design. We’ve written about why we’ve built this plugin and [how we use it here](monzo.com/blog). 


## Installation

Double click `monzo-file-cleaner.sketchplugin` in Finder, or run `open monzo-file-cleaner.sketchplugin` from the terminal, within this directory.

## Developing the plugin (proceed with caution ⚠️)

_This plugin was created using `skpm`. For a detailed explanation on how things work, checkout the [skpm Readme](https://github.com/skpm/skpm/blob/master/README.md)._

### Usage

Install the dependencies

```bash
npm install
```

Once the installation is done, you can run some commands inside the project folder:

```bash
npm run build
```

To watch for changes:

```bash
npm run watch
```

Additionally, if you wish to run the plugin every time it is built:

```bash
npm run start
```

### Custom Configuration

#### Babel

To customize Babel, you have two options:

* You may create a [`.babelrc`](https://babeljs.io/docs/usage/babelrc) file in your project's root directory. Any settings you define here will overwrite matching config-keys within skpm preset. For example, if you pass a "presets" object, it will replace & reset all Babel presets that skpm defaults to.

* If you'd like to modify or add to the existing Babel config, you must use a `webpack.skpm.config.js` file. Visit the [Webpack](#webpack) section for more info.

#### Webpack

To customize webpack create `webpack.skpm.config.js` file which exports function that will change webpack's config.

```js
/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {boolean} isPluginCommand - whether the config is for a plugin command or a resource
 **/
module.exports = function(config, isPluginCommand) {
  /** you can change config here **/
}
```

### Debugging

To view the output of your `console.log`, you have a few different options:

* Use the [`sketch-dev-tools`](https://github.com/skpm/sketch-dev-tools)
* Open `Console.app` and look for the sketch logs
* Look at the `~/Library/Logs/com.bohemiancoding.sketch3/Plugin Output.log` file

Skpm provides a convenient way to do the latter:

```bash
skpm log
```

The `-f` option causes `skpm log` to not stop when the end of logs is reached, but rather to wait for additional data to be appended to the input

### Publishing your plugin

```bash
skpm publish <bump>
```

(where `bump` can be `patch`, `minor` or `major`)

`skpm publish` will create a new release on your GitHub repository and create an appcast file in order for Sketch users to be notified of the update.

You will need to specify a `repository` in the `package.json`:

```diff
...
+ "repository" : {
+   "type": "git",
+   "url": "git+https://github.com/ORG/NAME.git"
+  }
...
```
