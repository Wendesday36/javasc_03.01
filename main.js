window.addEventListener("load", init);

function init() {
  const objList = [
    {
      nev: "Zoé",
      mondat: "Befejeztem tegnap a szobám kifestését!",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Kornél",
      mondat: "Finom volt a gyros ebéd.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Bónó",
      mondat: "Vettem egy új síkesztyűt.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Leila",
      mondat:
        "Tegnap volt itt a várandós nővérem, és a baba lerúgta a kezem a hasáról.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Bence",
      mondat: "Hálát adtam az úrnak, hogy lementem edzeni.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Hunor",
      mondat:
        "Az egyik kedvenc játékom le volt árazva, és megvettem, és hétfőn született meg az unokatestvérem gyereke.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Ádám",
      mondat: "Kirúgták a gyökér főnökömet.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Dominik",
      mondat:
        "Sose szerettem a csípőset és mégis vágytam rá és ettem és nagyon jól esett.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Lél",
      mondat: "Finom volt a vacsi.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Bónó",
      mondat: "Vettem egy új síkesztyűt.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Laci",
      mondat:
        "Van egy játék és készítettek hozzá egy grafikai modult és és abba találtam egy pixelek elsimitására apit és a mozgásérzékelést, és a jobban nézett ki a játék.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Ricsi",
      mondat:
        "Tegnap elaludtam Csolti Péter tanár úr óráján és egész nap aludtam.",
      kor: 23,
      teso: 0,
      szemszín: "kék",
    },
    {
      nev: "Dominik",
      mondat: "Az egyik lakótársam hozott nekem sütit.",
      kor: 23,
      teso: 1,
      szemszín: "kék",
    },
    {
      nev: "Martin",
      mondat: "Ember, most jöttem a templomból",
      kor: 23,
      teso: 0,
      szemszín: "zöld",
    },
    {
      nev: "Valentin",
      mondat: "Vezethettem a volt munkahelyem új céges autóját.",
      kor: 23,
      teso: 31,
      szemszín: "kék",
    },
  ]; //javascriptben az objektum kulcs ertek parokat jelent
  console.log(objList);

  szuloElem = document.querySelectorAll("article");
  const tablazatSzuloelem = document.querySelectorAll("#tablazat");
  const txt = osszeallit(objList);
  const tablazatSzoveg = tablazatMegjelenit(objList);

  megjelenit(txt, szuloElem);
  megjelenit(tablazatSzuloelem, tablazatSzoveg);
}
function osszeallit(objList) {
  let txt = "";
  for (let index = 0; index < objList.length; index++) {
    txt +=
      "<div><h3>" +
      objList[index].nev +
      "</h3><p>" +
      objList[index].mondat +
      "</p></div>";
    console.log(objList[index]);
  }

  return txt;
}
function megjelenit(szuloElem, txt) {
  szuloElem[0].innerHTML = txt;
}
function tablazatMegjelenit(objList) {
  let tablazatSzoveg = "<table> <tr>";
  let object = objList[0];
  for (const x in object) {
    const element = object[x];
    tablazatSzoveg += "<td>" + x + "</td>";
  }
  tablazatSzoveg += "</tr>";

  for (let index = 0; index < objList.length; index++) {
    tablazatSzoveg += "<tr>";
    let object = objList[index]; //a listában az aktuális ember összes adata
    for (const x in object) {
      const element = object[x];
      tablazatSzoveg += "<td>" + object[x] + "</td>";
    }
    tablazatSzoveg += "</tr>";
  }

  tablazatSzoveg += "</table>";
  return tablazatSzoveg;
}
