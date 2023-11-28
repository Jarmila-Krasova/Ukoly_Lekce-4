/*
Firma nabízející trička s potiskem poskytuje množstevní slevy podle počtu objednaný kusů. Při objednávce pod 50 kusů stojí jedno tričko 300 Kč.
Pokud si objednáme alespoň 50 kusů, je cena 250 Kč za kus. Při objednávce nad 200 kusů je cena 200 Kč za tričko. 
Nad 500 kusů zaplatíme 150 Kč za tričko a nad 1000 kusů zaplatíme 120 korun za tričko.
Napište stránku, která od uživatele obdrží počet kusů, které si chce objednat, a program odpoví celkovou ceny objednávky výpisem do stránky.
*/

const pocet = Number(prompt('Zadejte prosím počet kusů triček, které si chcete objednat'));
let cena = 300;
if (pocet > 1000) {
    cena = 120;
} else if (pocet > 500) {
    cena = 150;
} else if (pocet > 200) {
    cena = 200;
} else if (pocet > 50) {
    cena = 250;
}
document.body.innerHTML += `<p>Jedno tričko Vás bude stát ${cena} Kč</p>`;