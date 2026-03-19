import { Link } from 'react-router-dom';
import './App.css';
import facts from './Facts';
function App() {
  const string = [
    '#',
    'ISM FAMILIYA',
    'SINF',
    'TELEFON RAQAM',
    `YO'NALISH`,
    'KURSLAR',
    'BALANS',
    'STATUS',
    `QO'SHIMCHA`,
  ];
  return (
    <>
      <table className="bs">
        <thead>
          <tr className="bt">
            {string.map((e, i) => (
              <th key={i}>{e}</th>
            ))}
          </tr>
          {facts.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>
                {e.name} {e.lastname}
              </td>
              <td>{e.class}</td>
              <td>{e.phone}</td>
              <td>{e.direction}</td>
              <td>{e.course}</td>
              <td>{e.balance}</td>
              <td className={e.balance>100000 ? 'gr' : 'rd'}>{e.balance>100000 ? 'Aktiv' : 'Arxiv'}</td>
              <td>
                <Link to={`/group/${e.id}`}>Profilga o'tish</Link>
              </td>
            </tr>
          ))}
        </thead>
      </table>
    </>
  );
}
export default App;