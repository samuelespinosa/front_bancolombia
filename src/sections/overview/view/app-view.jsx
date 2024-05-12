import DenseTable from '../dense-table';
import Header from '../header'; 
import MovimientoForm from '../form';
import {useEffect,useState} from 'react';
import {fetchData} from '../../utils/data';
import { useParams } from 'react-router-dom';
export default function AppView(props) {
  const [rows,setRows]=useState([]);
  const [toggleForm, setToggleForm]=useState(false);
  const {cuenta} = useParams();
  useEffect(() => {
    const fetchDataFromAPI= async () => {
      const response = await fetchData(`api/movimientos/${cuenta}/lista_movimientos/`);
      setRows(response.data); 
      }
    
    fetchDataFromAPI();
  }, []);  
  return (
      <>
        <Header toggleForm={()=>setToggleForm(!toggleForm)}/>

      { toggleForm? 
        <DenseTable rows={rows} />:
        <MovimientoForm/>
      }
      </>
  );
}
