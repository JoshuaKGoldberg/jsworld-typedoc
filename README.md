# JSWOrld TypeDoc Example

Bare-bones example project showing generation of a docs site using [TypeDoc](https://typedoc.org/).

## Usage

Setting the project up and generating the HTML documentation site under `docs/`:

```shell
git clone https://github.com/JoshuaKGoldberg/jsworld-typedoc
cd jsworld-typedoc
npm i
npm run docs
```

> Normally, you'd want to gitignore generated assets like those.
> This project leaves them in for ease of reference, so you don't have to build locally before seeing them. 💖

### Watch Mode

This project also comes with a watcher script to regenerate the docs site as you update source code:

```shell
npm run watch
```
