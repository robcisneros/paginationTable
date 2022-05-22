import useHttp from "./components/hooks/use-http";
import "./App.css";
import { useEffect} from "react";
import BootTable from "./components/BootTabla";
import { useDispatch } from "react-redux";
import BootPagination from "./components/BootPagination";
import _ from "lodash";


function App() {

  const { sendRequest: fetchAPI } = useHttp();
  const dispatch = useDispatch();

  useEffect(() => {
    const transformData = (dataObj) => {
      const objetos = dataObj.results;

      const loadedData = [];

      for (const objeto in objetos) {
        //objetos.map((objeto, index) => (
        loadedData.push({
          id: objetos[objeto]._id,
          city: objetos[objeto].cityid,
          name: objetos[objeto].name,
          statew: objetos[objeto].state,
          pop: +objetos[objeto].probabilityofprecip,
          relhum: +objetos[objeto].relativehumidity,
          lrt: objetos[objeto].lastreporttime,
        });
        }

      const firstSlice = (_(loadedData).slice(0).take(10).value());

      dispatch({type:'GETWEATHER', loadedData});
      dispatch({type:'CHANGE_SLICE', weatherSlice:firstSlice});
      
    };

    fetchAPI(
      {
        url: "https://api.datos.gob.mx/v1/condiciones-atmosfericas",
      },
      transformData
    );
  }, [fetchAPI, dispatch]);

  return <div className="App">
    <BootTable />
    <BootPagination />
  </div>;
}

export default App;
