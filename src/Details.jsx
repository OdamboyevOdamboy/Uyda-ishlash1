import { useParams } from 'react-router-dom';
import './App.css';
import facts from './Facts';
const Details = () => {
  const { name } = useParams();
  let sub = facts.find((e) => e.id == name);
  let tx = [{ tb: 'Telefon raqam:' }, { name: `${sub.phone}` }, { tb: `Yo'nalish:` }, { name: `${sub.direction}` }, { tb: 'Guruh:' }, { name: `${sub.group}` }, { tb: 'Kurslar:' }, { name: `${sub.course}` }, { tb: 'Status:' }, { name: `${sub.status}` }];
  // let tx1=[``,``,``,``,``]
  // let tx1=[{name:`${sub.phone}`},{name:`${sub.direction}`},{name:`${sub.group}`},{name:`${sub.course}`},{name:`${sub.status}`}];
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
                <div>{e.tb}</div>
                <div>{e.name}</div>
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
