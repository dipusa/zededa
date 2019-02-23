import { createAction } from "redux-actions";
export const filterReportSuccess = createAction("FILTERREPORT_SUCCESS");
export const getReportsSuccess = createAction("GET_REPORT");
export const sortReportSuccess = createAction("SORT_REPORT");
export const filterReports = search_keyword => {
    return dispatch => {
        dispatch(filterReportSuccess({ search_keyword: search_keyword }));
    };
};

export const getReports = () => {
    return dispatch => {
        dispatch(getReportsSuccess());
    };
};

export const sortReport = reverse => {
    return dispatch => {
        dispatch(sortReportSuccess({ reverse: reverse }));
    };
};
