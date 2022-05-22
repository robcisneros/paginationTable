import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

const BootPagination = () => {
  const arrayData = useSelector((state) => state.weatherData);
  const posts = useSelector((state) => state.paginationData);
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10;
  const dispatch = useDispatch();

//const datooos = (_(arrayData).slice(0).take(pageSize).value());
  console.log("PAGINATION RUNNING");

  const onChangeCurrentPageHandler = useCallback((page) => {
    //dispatch({type:'CHANGE_CURRENT_PAGE', pageNo});
    setCurrentPage(page);
    const startIndex = (page - 1) * pageSize;
    const weatherSlice= _(arrayData).slice(startIndex).take(pageSize).value();
    dispatch({type:'CHANGE_SLICE', weatherSlice});
    dispatch({type:'COUNTER_PAGE', startIndex});
    console.log('dentro de function');
    console.log(posts);
  }, [posts, pageSize, dispatch, arrayData]);

  const pageCount = arrayData ? Math.ceil(100 / pageSize) : 0;
  if (pageCount === 1) return null;
  // CREA UN ARRAY CON VALOR DE SU PROPIA POSICIÓN
  const pages = _.range(1, pageCount + 1);



  return (
    <div>
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <p className="page-link" onClick={() => onChangeCurrentPageHandler(page)}>{page}</p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default React.memo(BootPagination);
