[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/chuck147147/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/chuck147147/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

An original 1024×1024 broadsheet for Thursday 26 November 2026. Cream newsprint, black ink, gold and deep red frame twelve world headlines, led by a hand-drawn SVG illustration of the Cairo tanker blaze. All artwork and layout were authored for this entry; no external assets are used.

Run with Node 22:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program copies the rendered PNG unchanged. It uses only Node's filesystem and path standard libraries and needs no network access. `news.html` is the editable artwork source; `entry.png` is its Chromium rendering. Headline provenance is recorded in `SOURCES.md`.

Rendering: `bash render.sh` uses headless Chromium to create `entry.png`, validates its dimensions and size with Pillow, and checks two program runs for identical bytes. Set `CHROMIUM_BIN` to override the browser path.

Current session limitation: the environment blocked Chromium startup with `shutdown: Operation not permitted` at `sandbox_host_linux.cc:41`. Consequently `entry.png` has not been produced, visual inspection and copy checks have not run, and this entry is not yet submission-ready. The installed Node version is 24.22.1; Node 22 was not available for runtime validation.
