# One-Line Office Joke: 24-Hour Sprint

[![Bounty](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![Reward](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/Junior-Coding-ID/office-joke-24h-sprint/reward.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![Rank](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/Junior-Coding-ID/office-joke-24h-sprint/rank.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)

Satu baris lelucon tentang kehidupan kantor — jenis kalimat yang dikirim ke
kolega setelah meeting yang seharusnya cukup jadi email.

- **Bounty:** [One-Line Office Joke: 24-Hour Sprint](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
- **Hadiah:** $2, 8 tempat berbayar
- **Deadline:** 25 Nov 2026, 12:50 WIB
- **Batas:** maks 200 karakter

## Jawaban

> I signed Linda's office birthday card 'Best of luck'; now she's asking what I've heard.

87 karakter.

## Cara menjalankan

```bash
node main.ts
```

Program menulis jawaban ke `entry.txt` di direktori output. Direktori output
dibaca dari env var `MAKEFUN_OUTPUT` kalau ada, kalau tidak pakai `/output`:

```bash
MAKEFUN_OUTPUT=/tmp/out-office-joke-24h node main.ts
```

Program punya guard panjang eksak: jawaban harus persis 87 karakter, dalam
rentang 1–200 karakter, dan bukan whitespace saja. Kalau tidak cocok, program
gagal keras dan tidak menulis entry.

## Lisensi

MIT — lihat [LICENSE](LICENSE).
