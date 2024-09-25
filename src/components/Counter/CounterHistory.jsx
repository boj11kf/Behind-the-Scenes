import { useState } from 'react';

import { log } from '../../log.js';

function HistoryItem({ count }) {
  log('<HistoryItem /> rendered', 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? 'selected' : undefined}>
      {count}
    </li>
  );
}


/* 
  Listázásnál, mindig adjunk meg id-t az elemeinknek, ne index-el
  próbáljuk meg az unique key-t elérni, mert elem beszúrása / törése
  esetén ahogy az indexek nőlnek / csökkennek egy teljesen új listát
  kapunk. (Lista elejére beszúrás esetén pl a 0. elem folyamatosan új
  lesz és változik, ezzel a teljes listát re-renderelésre kényszerítve,
  törlés esetén pedig triviális.) A react DOM ugyanis ellenőrzi,
  mi változott, és az index key miatt a teljes lista úgy tűnik mintha 
  változna. 

  Amit viszont mi elszeretnénk érni, hogy a ne re-renderelődjön, lista
  esetn sem a teljes lista és hozzá tartozó html kód csak hozzáadódojon 
  a HTML kódhoz, vagy tűnjön el belőle 1-1 sor. 


*/

export default function CounterHistory({ history }) {
  log('<CounterHistory /> rendered', 2);

  return (
    <ol>
      {history.map((count) => (
        <HistoryItem key={count.id} count={count.value} />
      ))}
    </ol>
  );
}
