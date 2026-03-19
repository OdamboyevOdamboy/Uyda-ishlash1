import { Link } from 'react-router-dom';
import './App.css';
import facts from './Facts';
import { useDispatch, useSelector } from 'react-redux';
import { addToCard } from './products/productSlice';
function App() {
  const count = useSelector((state) => state.product.count);
  const dispatch = useDispatch();
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
    <h1>{count} </h1>
    <button onClick={() => dispatch(addToCard())}>increment</button>
    <Link to={"/product"}>Product</Link>
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