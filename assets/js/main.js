// =================== lev2_1: for loop Array  ===========================

// Nehmen wir an, wir haben 100 Bilder in unserem Ordner.
// Wir wollen ein Array von Bildern erstellen und die Dateinamen standardisieren.
// Gib in der Konsole image_001.jpg bis image_100.jpg aus.
// Deklariere die Function imageArray.
// In Funktionskörper deklariere die Variable returnArray als leeres Array.
// Schreibe eine for-Schleife.
// Nutze push() und Conditionals Statements (if, else if, else).
// Lass dir returnArray in der Konsole ausgeben.

const imageArray = () => {
  let returnArray = [];
  for (let i = 1; i <= 100; i++) {
    if (i < 10) {
      returnArray.push(`image_00${i}`);
    } else if (i < 100) {
      returnArray.push(`image_0${i}`);
    } else {
      returnArray.push(`image_${i}`);
    }
  }
  console.log(returnArray);
};

imageArray();

// =================== Loops-Level-2_2  ===========================

// Lernziel: Textausgabe je nach Eingabe der User:innen erstellen unter Verwendung von Bedingungen und Schleifen.
// In deinem HTML ist ein Inputfeld zu sehen, in das User:innen eine Zahl eingeben können. So wird die Anzahl des Buchstabens "o" festgelegt.
// Schreibe eine Funktion, mit der du am Ende in deinem HTML das Wort "Loop" ausgibst, mit der eingebenen Anzahl aus dem Input-Feld.

// const loopIt = () => {
//   const inputNumber = document.body.querySelector("#inputNumber");
//   const outputText = document.body.querySelector(".output");
//   const character = "o";

//   for (let i = 0; i <= inputNumber.value; i++) {
//     let characterNumber = character.repeat(i);
//     outputText.textContent = `L${characterNumber}p`;
//   }
// };

// =================== Loops-Level-3_3  ===========================

// Lernziel: Textausgabe je nach Eingabe der User:innen erstellen unter Verwendung von Bedingungen und Schleifen.
// Du verfeinerst deine "Loooooop"-Aufgabe.

// Jetzt soll eine Fehlermeldung ausgegeben werden, wenn der/die User:in 0 eingibt.

// Wenn die Eingabe gerade ist (z. B. 2, 4, 6, ...), sollten sich die "o"-Buchstaben in das Wort "L..p" einfügen, wobei die Anzahl der "o"-Buchstaben der Eingabezahl entspricht. Zum Beispiel: Bei der Eingabe von 4 wird "Loooop" ausgegeben.

// Wenn die Eingabe ungerade ist (z. B. 1, 3, 5, ...), sollten sich abwechselnd "o" und "0" in das Wort "L..p" einfügen, beginnend mit "o". Zum Beispiel: Bei der Eingabe von 5 wird "Lo0o0op" ausgegeben.

const loopIt = () => {
  const inputNumber = document.body.querySelector("#inputNumber");
  const outputText = document.body.querySelector(".output");
  const character = "o";
  const character0 = "0";

  for (let i = 0; i <= inputNumber.value; i++) {
    if (inputNumber.value == 0) {
      outputText.textContent = "Bitte gib eine Zahl größer 0 ein";
    } else if (inputNumber.value % 2 == 0) {
      let characterNumber = character.repeat(i);
      outputText.textContent = `L${characterNumber}p`;
    } else {
      for (let i = 1; i <= inputNumber.value; i++) {
        let characterNumber = character.repeat(i) + character0.repeat(i);
        outputText.textContent = `L${characterNumber}p`;
      }
    }
  }
};

// =================== Loops-Level-3_2  ===========================

// Du hast ein Array aus Zahlen und möchtest herausfinden, durch welche Zahlen sie (außer durch eins und sich selbst) teilbar sind.
// Schreibe das Ergebnis in dein HTML.
// Das Array findest du im Code-Snippet!

let numArr = [5, 22, 15, 100, 55];

const output2 = document.body.querySelector(".output2");
