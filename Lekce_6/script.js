//Bez použití knihovny Day.js napište funkci parseDate, která na vstupu obdrží řetězec obsahující datum ve formátu DD.MM.YYYY a vrátí objekt s jednotlivýnu částmi zadaného data. 
//Příklad použití: 
//parseDate('12.03.2015'); // → { day: 12, month: 3, year: 2015 }
//parseDate('06.04.2021'); // → { day: 6, month: 4, year: 2021 }

let celeDatum = prompt('Zadej datum ve formátu DD.MM.YYYY:')

function parseDate(rozdeleni) {
    const rozdeleneDatum = rozdeleni.split('.')

    return {
        day: Number(rozdeleneDatum[0]),
        month: Number(rozdeleneDatum[1]),
        year: Number(rozdeleneDatum [2])
    };
}

let vysledek = parseDate(celeDatum)
document.body.innerHTML = JSON.stringify(vysledek)