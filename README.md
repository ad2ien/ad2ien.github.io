# Ad2ien website

![Gitmoji](https://img.shields.io/badge/gitmoji-%20%F0%9F%98%9C%20%F0%9F%98%8D-FFDD67.svg?style=flat-square)

This repo holds my CV as a blog.

It is based on [Zola](https://github.com/getzola/zola) and this nice template : <https://github.com/tchartron/blow>

## Start server

```bash
yarn prod
zola serve
```

## dev

css processing along side `zola serve`

```bash
yarn watch
```

Or even better :

```bash
docker run --rm -u "$(id -u):$(id -g)" -v $PWD:/app --workdir /app ghcr.io/getzola/zola serve --interface 0.0.0.0 --port 8080 --base-url localhost
```
