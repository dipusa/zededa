import React, { Component } from "react";
import { connect } from "react-redux";
import "./DetailPageContainer.scss";

class DetailPageContainer extends Component {
    state = {
        data: {},
        identity: ""
    };
    componentDidMount() {}
    render() {
        if (this.props.report) {
            const identity = this.props.match.params.identity.toLowerCase();
            const report = this.props.report.filter(item =>
                item["identity"].toLowerCase().match(identity)
            );
            if (this.state.identity !== identity) {
                this.setState({ identity: identity, data: report[0] });
            }
        }
        return (
            <div className="detail-page-container">
                <div className="detail-page-container__image-container">
                    <img
                        src={require("../../assetes/" +
                            this.props.match.params.identity.toLowerCase() +
                            ".jpeg")}
                        alt="photo1"
                    />
                </div>
                <div className="detail">
                    <div className="parameters">
                        <span className="name">Name</span>
                        <span className="value">
                            {this.state.data.identity}
                        </span>
                    </div>
                    <div className="parameters">
                        <span className="name">Description</span>
                        <span className="value">Your description here</span>
                    </div>
                    <div className="parameters">
                        <span className="name">Camera Id</span>
                        <span className="value">
                            {this.state.data.camera_id}
                        </span>
                    </div>
                    <div className="parameters">
                        <span className="name">Identity Type</span>
                        <span className="value">
                            {this.state.data.identity_type}
                        </span>
                    </div>
                    <div className="parameters">
                        <span className="name">Confidence Score</span>
                        <span className="value">
                            {this.state.data.confidence_score}
                        </span>
                    </div>
                    <div className="parameters">
                        <span className="name">City</span>
                        <span className="value">{this.state.data.city}</span>
                    </div>
                    <div className="parameters">
                        <span className="name">Application Id</span>
                        <span className="value">
                            {this.state.data.application_id}
                        </span>
                    </div>
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

export default connect(mapStateToProps)(DetailPageContainer);
