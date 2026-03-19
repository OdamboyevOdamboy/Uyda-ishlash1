import { Link } from 'react-router-dom';
import { addToCard } from './productSlice';
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {
    // Store-dan count qiymatini olamiz
    const count = useSelector((state) => state.product.count);
    console.log(count)
    const dispatch = useDispatch();

    const cardStyle = {
        border: '1px solid #ddd',
        padding: '20px',
        borderRadius: '12px',
        width: '500px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    };

    const buttonStyle = {
        margin: '0 10px',
        padding: '8px 16px',
        cursor: 'pointer',
        borderRadius: '6px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        fontSize: '18px'
    };

    return (
        <div style={cardStyle}>
            <Link to={"/group"}>Groups</Link>
            
            <img src="https://picsum.photos/400/300" alt="Product" style={{ borderRadius: '8px' }} />
            <h3>Smartfon Pro Max</h3>
            <p>Narxi: $999</p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button
                    style={{ ...buttonStyle, backgroundColor: '#dc3545' }}
                    onClick={() => dispatch()}
                >
                    -
                </button>

                <span style={{ fontSize: '20px', fontWeight: 'bold', minWidth: '30px' }}>
                    {count}
                </span>

                <button
                    style={{ ...buttonStyle, backgroundColor: '#28a745' }}
                    onClick={() => dispatch(addToCard())}
                >
                    +
                </button>
            </div>

            <p style={{ marginTop: '15px', color: '#666' }}>
                Umumiy: ${count * 999}
            </p>
        </div>
    );
};

export default Product;