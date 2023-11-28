/*
Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho křestní jméno a pak příjmení, obojí bez diakritiky.
Pomocí metody trim zajistěte, že ve jméně ani příjmení nebudou na začátku ani na konci žádné bílé znaky.
Pomocí metody slice vyřízněte ze jména i příjmení příslušné části. Z vašeho příjmení se vezme pět prvních znaků a z vašeho křestního jména první tři.
Pomocí interpolace řetězců sestavte výslednou adresu a vypište ji do stránky.
*/


let jmeno = prompt("Zadej prosím svoje křestní jméno bez diakritiky:");
let prijmeni = prompt("Zadej prosím svoje příjmení bez diakritiky");

jmeno = jmeno.trim().slice(0,5).toLowerCase();
prijmeni = prijmeni.trim().slice(0,4).toLowerCase();

document.body.innerHTML = `
<h2>Tvoje fakultní e-mailová adresa je:</h2>
<p>${prijmeni + jmeno}@fit.cvut.cz</p>
`