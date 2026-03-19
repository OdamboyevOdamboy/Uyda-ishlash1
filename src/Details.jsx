import { useNavigate, useParams } from 'react-router-dom';
import './App.css';
import facts from './Facts';
import { useEffect } from 'react';
const Details = () => {
  const { name } = useParams();
  let navigate = useNavigate();
  let sub = facts.find((e) => e.id == name);
  let tx = [
    { tb: 'Telefon raqam:', name: `${sub.phone}`, ny: false },
    { tb: `Yo'nalish:`, name: `${sub.direction}`, ny: false },
    { tb: 'Guruh:', name: `${sub.group}`, ny: false },
    { tb: 'Kurslar:', name: `${sub.course}`, ny: false },
    {
      tb: 'Status:',
      name: `${sub.balance > 100000 ? 'Aktiv' : 'Arxiv'}`,
      ny: true,
    },
  ];
  let tx1 = [
    { tb: 'Yosh:', name: `${sub.age}` },
    { tb: `Ro'yxatdan o'tgan sana`, name: `${sub.registerDate}` },
    { tb: 'Balans:', name: `${sub.balance} so'm` },
    { tb: `O'zlashtirish`, name: `${sub.progress}` },
  ];
  let widther;
  document.addEventListener('change', () => {
    console.log(window.innerWidth);
  });
  useEffect(() => {
    widther = window.innerWidth;
    console.log(widther);
  }, [window.innerWidth]);
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
              <span className="email fm">
                {sub.name.toLocaleLowerCase()}.
                {sub.lastname.toLocaleLowerCase()}
                @example.com
              </span>
            </div>
          </div>
          <div className="md">
            <div className="wy">
              {tx.map((e, i) => (
                <div
                  key={i}
                  className={
                    e.name == 'Aktiv' || e.name == 'Arxiv' ? 'lf fl' : 'lf'
                  }
                >
                  <div className="fm">{e.tb}</div>
                  <div className="fm1">
                    <span
                      className={e.name == 'Aktiv' ? 'act' : e.ny ? 'arx' : ''}
                    >
                      {e.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="wy">
              {tx1.map((e, i) => (
                <div key={i} className="lf">
                  <div className="fm">{e.tb}</div>
                  <div className="fm1">{e.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="ws">
            <button
              className="bbt"
              onClick={() => {
                navigate(-1);
              }}
            >
              Orqaga qaytish
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;