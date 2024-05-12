import '../../App.css';
import logo from '../../assets/logo.svg';

export default function Header({toggleForm}) {
  function pdfHandler() {
      console.log('que me de tiempo jas'); 
  } 
  return (
    <div id="header">
      <figure className="logo">
        <img src={logo} alt="logo"/>
      </figure>
      <div style={{marginRight:'3rem'}} className='botones_header'>
        <button onClick={toggleForm}>Nueva Transación</button>
        <button onClick={pdfHandler}>Descargar Pdf</button>
      </div>  
    </div>
  );
}

