# Ad2ien website

![Gitmoji](https://img.shields.io/badge/gitmoji-%20%F0%9F%98%9C%20%F0%9F%98%8D-FFDD67.svg?style=flat-square)

This repo holds my CV as a blog.

It is based on [Zola](https://github.com/getzola/zola) and this nice template : <https://github.com/tchartron/blow>

## Start server

```bash
yarn dev
zola serve
```

## dev

css processing along side `zola serve`

```bash
yarn watch
```

Or even better :

```bash
docker run --rm -u "$(id -u):$(id -g)" -v $PWD:/app --workdir /app -p 1983:1983 ghcr.io/getzola/zola:v0.17.1 serve --interface 0.0.0.0 --port 1983 --base-url localhost
```
