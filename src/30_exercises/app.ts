//! Promises-TS-Level-1_1

// Simulation des alten Spiels “Sie liebt mich, sie liebt mich nicht” 😉

// - Lege eine datei she-loves-me.ts an
// - Erstelle ein Promise vom Typ string
// - Lass dir mit Math.random einen zufälligen boolean-Wert generieren
// - Bei true  “She loves me.” resolved
// - Bei false “She loves me not.” rejected
// - Hänge dich an das Promise
// - Gib im then-Block das Ergebnis auf der Konsole aus
// - Gib im catch-Block das Ergebnis auf der Konsole aus
// - Gib im finally-Block “Now I know what is going on” aus

//! Promises-TS-Level-1_2

// - Lege eine Datei weather-type.ts an
// - Erstelle dort ein Enum WeatherType mit den Werten none = 0, sunny = 1, cloudy = 2, rainy = 3, snowy = 4, stormy = 5, windy = 6
// - Lege eine forecast.ts an
// - Erstelle ein Promise vom Typ WeatherType
// - Lass dir mit Math.random einen zufälligen Wert zwischen 0 und 9 generieren
// - Ist der Wert zwischen 0 und 6, gib mit resolve den zugeordneten Enum-Wert zurück
// - Ist der Wert > 6, rejecte das Promise mit einem Fehlertext “Weather forecast could not be determined”
// - Hänge dich an das Promise
// - Gib im then-Block das Ergebnis auf der Konsole aus
// - Gib im catch-Block den Fehler auf der Konsole aus

//! Promises-TS-Level-1_3

// - Lege eine Datei homework.ts an
// - Lege dort drei Promises vom Typ string an
// - Das erste Promise gibt nach 20 Sekunden “Exercise 1 done.” zurück
// - Das erste Promise gibt nach 30 Sekunden “Exercise 2 done.” zurück
// - Das erste Promise gibt nach 40 Sekunden “Exercise 3 done.” zurück
// - Lege eine homework.html an und verbinde sie mit homework.ts
// - Lege dort eine Überschrift “Doing my homework” an
// - Darunter soll ein Paragraph angeordnet sein - dort steht am Anfang “Starting…”
// - Wenn das erste Promise resolved wird, wird der entsprechende Text “Exercise 1 done.” im Paragraph angezeigt
// - Wenn das zweite und dritte Promise resolved wird, wird der entsprechende Text angehängt

//!Promises-TS-Level-2_1
// - Lege eine Datei number-methods.ts an
// - Erstelle ein Promise vom Typ number[]
// - Lass dir mit Math.random drei zufällige Werte zwischen 1 und 130 generieren
// - Ist einer der Werte größer als 100, rejecte das komplette Promise mit einem Fehlertext
// - Schreibe andernfalls die drei Werte in ein Array und resolve das Array

// - Hänge dich an das Promise
// - Es werden fünf then-Blöcke aneinandergehängt (Chaining)
// - Die Ergebnisse sollen jeweils erst auf die Konsole geloggt und dann weitergereicht werden
// - Im ersten then-Block soll auf jeden Wert 7 aufaddiert werden
// - Im zweiten then-Block soll jeder Wert mit 2 multipliziert werden
// - Im dritten then-Block soll von jedem Wert 1 abgezogen werden
// - Im vierten then-Block soll für jeden Wert Modulo 2 ermittelt werden
// - Im fünften then-Block sollen die Werte auf die Konsole geloggt werden
// - Gib im catch-Block den Fehler auf der Konsole aus
// - Gib im finally-Block “Finished” auf der Konsole aus
