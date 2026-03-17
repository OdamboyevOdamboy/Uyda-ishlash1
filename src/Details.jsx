import { useParams } from 'react-router-dom';
import './App.css';
import facts from './Facts';
const Details = () => {
  const { name } = useParams();
  let sub = facts.find((e) => e.id == name);
  let tx = [
    'Telefon raqam:',
    `${sub.phone}`,
    `Yo'nalish:`,
    `${sub.direction}`,
    'Guruh:',
    `${sub.group}`,
    'Kurslar:',
    `${sub.course}`,
    'Status:',
    `Aktive`
  ];
  return (
    <>
      <div className="wf">
        <div className="cp">
          <div className="fh">
            <div className="dr">
              <div className="dm">
                {sub.name[0]}
                {sub.lastname[0]}
              </div>
            </div>
            <div className="tx">
              {sub.name} {sub.lastname}
              <span className="email">
                {sub.name.toLocaleLowerCase()}.
                {sub.lastname.toLocaleLowerCase()}
                @example.com
              </span>
            </div>
          </div>
          <div className="md">
            {tx.map((e, i) => (
              <div key={i}>
                <div>{e}</div>
              </div>
            ))}
          </div>
          {/* <div className="cw">
            
            
          </div>
          <div className="fk">
            <div className="du">
              {tx.map((e,i) => (
                <div key={i}>
                  <div>{e}:</div>
                  <div>{}</div>
                </div>
              ))}
            </div>
            <div className="du1">{}</div>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Details;
