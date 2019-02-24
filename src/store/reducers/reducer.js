import { handleActions } from "redux-actions";
const data = {
    report: [
        {
            timestamp: "2018-02-18T16:49:57",
            application_id: "app_id_3243",
            edge_gw_id: "edge_gw_id_32A45",
            confidence_score: 0.3281731096788866,
            identity_type: "criminal",
            coordinates: { top: 15, left: 95, right: 147, bottom: 67 },
            camera_id: "camera_id_2243",
            identity: "Srinibas_Maharana",
            city: "Bangalore",
            lat: 12.9698,
            long: 77.7499,
            description:
                "Infamous real-estate baron involved in illegal conversion of agriculture area and owning practically entire Sarjapura area."
        },
        {
            timestamp: "2018-02-18T16:48:57",
            application_id: "app_id_3243",
            edge_gw_id: "edge_gw_id_32A45",
            confidence_score: 0.3581731096788866,
            identity_type: "criminal",
            coordinates: { top: 16, left: 100, right: 137, bottom: 47 },
            camera_id: "camera_id_2243ER",
            identity: "Dipankar_samanta",
            city: "Bangalore",
            lat: 13.02906,
            long: 77.315086,
            description:
                "Infamous real-estate baron involved in illegal conversion of agriculture area and owning practically entire Sarjapura area."
        },
        {
            timestamp: "2018-02-18T16:51:31",
            application_id: "app_id_3243",
            edge_gw_id: "edge_gw_id_3245",
            confidence_score: 0.33361974933934424,
            identity_type: "criminal",
            coordinates: { top: 22, left: 121, right: 157, bottom: 58 },
            camera_id: "camera_id_2243",
            identity: "Prosenjit_Pal",
            city: "Kolkata",
            lat: 22.579956,
            long: 88.43795,
            description:
                "Notorious gangster running artificial intelligence mafia in Bangalore area"
        },
        {
            timestamp: "2018-02-18T16:59:31",
            application_id: "app_id_3243",
            edge_gw_id: "edge_gw_id_3245",
            confidence_score: 0.3761974933934424,
            identity_type: "criminal",
            coordinates: { top: 22, left: 121, right: 157, bottom: 58 },
            camera_id: "camera_id_2243",
            identity: "Amit_Mishra",
            city: "Bangalore",
            lat: 12.82561,
            long: 77.507262,
            description:
                "Notorious gangster running artificial intelligence mafia in Bangalore area"
        },
        {
            timestamp: "2018-02-18T17:59:31",
            application_id: "app_id_3243",
            edge_gw_id: "edge_gw_id_3245",
            confidence_score: 0.361974933934424,
            identity_type: "criminal",
            coordinates: { top: 22, left: 121, right: 157, bottom: 58 },
            camera_id: "camera_id_2243",
            identity: "Alok_Kumar",
            city: "New Delhi",
            lat: 28.4702,
            long: 77.294655,
            description:
                "Infamous real-estate baron involved in illegal conversion of agriculture area and owning practically entire Sarjapura area."
        }
    ],
    updated_report: []
};

const reducer = handleActions(
    {
        FILTERREPORT_SUCCESS: (state, action) => {
            const search_keyword = action.payload.search_keyword.toLowerCase();
            let updated_report = state.report.filter(item =>
                item["identity"].toLowerCase().match(search_keyword)
            );
            return {
                ...state,
                updated_report: updated_report
            };
        },
        GET_REPORT: state => {
            return {
                ...state,
                updated_report: state.report
            };
        },
        SORT_REPORT: (state, action) => {
            let updated_report = state.report;
            if (action.payload.reverse) {
                updated_report.reverse();
            } else {
                updated_report.sort((a, b) => {
                    let date1 = new Date(a["timestamp"]);
                    let date2 = new Date(b["timestamp"]);
                    if (date1.getFullYear() > date2.getFullYear()) {
                        return date1.getFullYear() - date2.getFullYear();
                    }
                    if (date1.getTime() > date2.getTime()) {
                        return date1.getTime() - date2.getTime();
                    }
                });
            }

            return {
                ...state
            };
        }
    },
    data
);

export default reducer;
