window.addEventListener("load", init);

function init() {
  const lista = [
    "Befejeztem tegnap a szobám kifestését!",
    "Finom volt a gyros ebéd.",
    "Kirúgták a gyökér főnökömet.",
    "Tegnap volt itt a várandós nővérem, és a baba lerúgta a kezem a hasáról.",
    "Hálát adtam az úrnak, hogy lementem edzeni.",
    "Finom volt a vacsi.",
    "Vettem egy új síkesztyűt.",
    "Az egyik kedvenc játékom le volt árazva, és megvettem, és hétfőn született meg az unokatestvérem gyereke. ",
    "Van egy játék és készítettek hozzá egy grafikai modult és és abba találtam egy pixelek elsimitására apit és a mozgásérzékelést, és a jobban nézett ki a játék.",
    "Tegnap elaludtam Csolti Péter tanár úr óráján és egész nap aludtam.",
    "Sose szerettem a csípőset és mégis vágytam rá és ettem és nagyon jól esett.",
    "Az egyik lakótársam hozott nekem sütit.",
  ];
  const txt = megjelenit(lista);
  szuloElem = document.querySelectorAll("article");
  kiir(szuloElem,txt)
}
function megjelenit(lista) {
  let txt = "";
  for (let index = 0; index < lista.length; index++) {
    txt += "<div><p>" + lista[index] + "</p></div>";
  }
  
  return txt;
}
function kiir(szuloElem,txt){
    szuloElem[0].innerHTML = txt;
}
  