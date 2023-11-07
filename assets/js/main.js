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

  for (let i = 0; i < inputNumber.value; i++) {
    if (inputNumber.value == 0) {
      outputText.textContent = "Bitte gib eine Zahl größer 0 ein";
    } else if (inputNumber.value % 2 == 0) {
      let characterNumber = character.repeat(i);
      outputText.textContent = `L${characterNumber}p`;
    } else {
      for (let j = 2; j <= inputNumber.value; j += 2) {
        let characterNumber2 = character.repeat(j);
        let characterNumber3 = character0.repeat(j);
        outputText.textContent = `L${characterNumber2}${characterNumber3}p`;
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

const checkDivi = () => {
  for (const singleNumber of numArr) {
    for (let i = 2; i < singleNumber; i++) {
      if (singleNumber % i === 0) {
        output2.innerHTML += `<p>Die ${singleNumber} ist teilbar durch ${i}, das Ergebnis ist ${
          singleNumber / i
        }</p>`;
      }
    }
  }
};

checkDivi();

// =================== Loops-Level-Bonus ===========================

let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `;

const sliceTextInArray = () => {
  let cutTimes = Math.ceil(text.length / 100);
  let textArr = [];
  let sliceStart = 0;
  let sliceEnd = 100;

  for (let i = 1; i < cutTimes; i++) {
    textArr.push(
      text.slice(sliceStart, sliceEnd).concat(` - ${i} of ${cutTimes}`)
    );
    sliceStart += 100;
    sliceEnd += 100;
  }
  console.log(textArr);
};

sliceTextInArray();
