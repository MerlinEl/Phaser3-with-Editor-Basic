

# JavaScript Phaser Editor 2D Project

![2022-04-22_17h51_13](https://user-images.githubusercontent.com/15173933/164750146-d072e80b-dacf-4b32-98b6-3cbf7b0a03f1.png)

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-908a85?logo=gitpod)](https://gitpod.io/#https://github.com/PhaserEditor2D/starter-template-basic-javascript)

This is a Phaser Editor 2D v3 project.

## Configuration

* It includes the latest Phaser v3 runtime (in the `lib/` folder).
* It is coded in JavaScript.
* It includes a VS Code project configuration (`jsconfig.json` file) and the type definitions (in the `types/` folder).

## Install Plugins

The project using two plugins which need to be installed wia npm.

Original [phasereditor2d-ninepatch-plugin](https://github.com/PhaserEditor2D/phasereditor2d-ninepatch-plugin)

Modified [phasereditor2d-roundedrectangle-plugin](https://github.com/MerlinEl/phasereditor2d-roundedRectangle-plugin)

## Run the editor

If you have NodeJS installed, you can run the editor using the `editor` NPM script, defined in the `package.json` file:

```bash
$ npm install
$ npm run editor
```

If you are in a remote environment (like the Gitpod.io IDE), then run the editor like this:

```bash
$ npm run editor-remote
```

If you want to see all the editor options, run:

```bash
$ npx phasereditor2d-launcher -help
```

If Phaser Editor 2D Core is globally installed, you can run:

```bash
$ PhaserEditor2D -project .
```
