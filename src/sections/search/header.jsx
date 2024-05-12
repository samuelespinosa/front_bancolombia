import '../../App.css';
import useNavigate from 'react-router-dom';
export default function Header() {
  const navigate=useNavigate(); 
  return (
    <div style={{textAlign:'center',}}>
      <figure onClick={()=>navigate('/')} className="logo">
        <img src={logo} alt="logo"/>
      </figure>
    </div>
  );
}

