# File Cleaner by Monzo

File Cleaner is a plugin that keeps your Sketch files immaculately clean and in order. We’ve written all about why we built it and the way it works [on our blog](https://monzo.com/blog/2018/12/11/design-files-system/). 

## What File Cleaner does
By following an artboard naming convention of 100, 101, 102, File Cleaner generates a grid for your canvas and ensures that every screen is in the right place, no matter what you add or where you add it. Here’s what it does to your files:<br>
<img src="/docs/assets/github-off-on.gif" width=“800px”>

<br>

### ✨ When you run Validate and Clean, it will:
* Tell you if there’s anything missing (eg. page name, artboards without names)
* Tell you if there’s any duplicate artboards
* Align all the artboards to their correct place in the grid
* Place new artboards in the correct place in their flow
* Re-arrange the left panel so artboards are in the correct order

<br>

### 👀 Some examples of how File Cleaner works in practice:
When you add a new screen to the end of your row it’ll give it the correct name and position:

<img src="/docs/assets/github-example-1.gif" width=“600px”><br><br>

When you make one artboard taller than the others it’ll adjust the grid to reflect this:

<img src="/docs/assets/github-example-2.gif" width=“600px”><br><br>

When you place a screen in the middle of a row, it’ll give it the correct name and update the names of all the following screen:

<img src="/docs/assets/github-example-3.gif" width=“600px”>

<br>

### 📄 The parameters for how it works:
* There is one page per file, named `Master`
* Each flow in the page is on its own row, and starts with a number that denotes it
* Each artboard is named after the flow its in, followed by where it sits in that flow. So, the 5th artboard in the 2nd flow is named 205.

*Top tip: if File Cleaner tells you when you’ve dropped an artboard into the middle of a flow and it has a duplicate name, you can add a suffix to the artboard name (eg “203#”) and it’ll position correctly*.

<br>

## Installation

* [Download](https://github.com/monzo/file-cleaner/releases/latest) the latest release of the plugin
* Un-zip
* Double-click on monzo-file-cleaner.sketchplugin

<br>

### This is a plugin from [Monzo Design](http://monzo.com/design).
