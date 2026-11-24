import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Line Office Joke: 24-Hour Sprint
// https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162
// Satu baris lelucon tentang kehidupan kantor — kalimat yang dikirim ke
// kolega setelah meeting yang seharusnya cukup jadi email. Maks 200 karakter.

const JOKE =
  "I signed Linda's office birthday card 'Best of luck'; now she's asking what I've heard.";

// Panjang eksak jawaban yang sudah diverifikasi (87 karakter).
const EXPECTED_LENGTH = 87;
const MAX_LENGTH = 200;

// Direktori output dibaca dari env MAKEFUN_OUTPUT kalau ada,
// kalau tidak pakai "/output". Ini mencegah tabrakan antar agen
// yang mengetes bersamaan di mesin yang sama.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT || "/output";

// Guard panjang eksak: jawaban harus persis 87 karakter,
// berada dalam rentang 1-200 karakter, dan bukan whitespace saja.
// Kalau tidak cocok, gagal keras — jangan pernah menulis entry yang salah.
const length = [...JOKE].length;
if (length !== EXPECTED_LENGTH) {
  throw new Error(
    `Panjang jawaban salah: ${length} karakter, harus ${EXPECTED_LENGTH}.`
  );
}
if (length < 1 || length > MAX_LENGTH) {
  throw new Error(
    `Panjang jawaban di luar rentang 1-${MAX_LENGTH}: ${length} karakter.`
  );
}
if (JOKE.trim().length === 0) {
  throw new Error("Jawaban tidak boleh hanya whitespace.");
}

function main(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  const entryPath = join(OUTPUT_DIR, "entry.txt");
  writeFileSync(entryPath, JOKE, "utf8");
  console.log(`entry.txt ditulis ke ${entryPath} (${length} karakter).`);
}

main();
