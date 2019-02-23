import React, { Component } from "react";
import { Table, Icon, Button } from "antd";
import { connect } from "react-redux";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { Chart } from "react-charts";
import * as actions from "../../store/actions";
import "./HomePageContainer.scss";

class HomePageContainer extends Component {
    state = {
        arrow_type_up: true,
        reverse: false
    };
    sortOnClickHandler = () => {
        this.props.sortReport(this.state.reverse);
        this.setState({
            arrow_type_up: !this.state.arrow_type_up,
            reverse: true
        });
    };
    onChangeHandler = e => {
        this.props.filterReport(e.target.value);
    };
    onView = identity => {
        window.open("/detail/" + identity, "_blank");
    };
    componentDidMount() {
        this.props.getReports(this.state.reverse);
    }
    render() {
        const columns = [
            { title: "Title", dataIndex: "identity", key: "Title" },
            {
                title: "Identity Type",
                dataIndex: "identity_type",
                key: "identity_type"
            },
            { title: "Event Time", dataIndex: "timestamp", key: "event_time" },
            {
                title: "Action Type",
                dataIndex: "view",
                key: "action_type",
                render: (text, record) => (
                    <Button
                        type="primary"
                        onClick={() => this.onView(record.identity)}
                    >
                        View
                    </Button>
                )
            }
        ];
        const style = {
            width: "100%",
            height: "100%"
        };
        return (
            <div className="container">
                <div className="container__table-container">
                    <div className="chart-container">
                        <Chart
                            data={[
                                {
                                    label: "Series 1",
                                    data: [
                                        [0, 1],
                                        [1.2, 2],
                                        [2, 4],
                                        [3, 2],
                                        [4, 4]
                                    ]
                                }
                            ]}
                            axes={[
                                {
                                    primary: true,
                                    type: "linear",
                                    position: "bottom",
                                    min: 0,
                                    max: 24
                                },
                                { type: "linear", position: "left" }
                            ]}
                        />
                    </div>
                    <div className="container__search-and-filter">
                        <span onClick={this.sortOnClickHandler}>
                            Sort By Time{" "}
                            <Icon
                                type={
                                    this.state.arrow_type_up
                                        ? "arrow-up"
                                        : "arrow-down"
                                }
                            />
                        </span>
                        <input
                            placeholder="Search by title"
                            onChange={this.onChangeHandler}
                        />
                    </div>
                    <Table
                        columns={columns}
                        dataSource={this.props.updated_report}
                    />
                </div>
                <div className="container__hitmap">
                    <Map
                        item
                        style={style}
                        xs={12}
                        google={this.props.google}
                        onClick={this.onMapClick}
                        zoom={5}
                        initialCenter={{
                            lat: 20.5937,
                            lng: 78.9629
                        }}
                    >
                        {this.props.report.map(item => (
                            <Marker
                                onClick={this.onMarkerClick}
                                title={item.identity}
                                position={{
                                    lat: item.lat,
                                    lng: item.long
                                }}
                                name={"Changing Colors Garage"}
                                icon={{
                                    scaledSize: this.props.google.maps.Size(
                                        10,
                                        10
                                    )
                                }}
                            />
                        ))}
                    </Map>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        report: state.reducer.report,
        updated_report: state.reducer.updated_report
    };
};

const mapDispatchToProps = dispatch => {
    return {
        filterReport: search_keyword =>
            dispatch(actions.filterReports(search_keyword)),
        getReports: () => dispatch(actions.getReports()),
        sortReport: reverse => dispatch(actions.sortReport(reverse))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    GoogleApiWrapper({
        apiKey: "AIzaSyARAo8_GTNRyKM-D_FkN_gXsuc5gmzbgMQ"
    })(HomePageContainer)
);
