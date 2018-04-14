import "react-circular-progressbar/dist/styles.css";
import React from "react";
import CircularProgressbar from "react-circular-progressbar";
import ProgressBarConfig from "./../../../../config/ProgressBarConfig";


const ProgressItem = ({ info }) => (
    <div className="Progressbar">
        <div className="BarItem">
            <CircularProgressbar
                percentage={info.percentages}
                className="BarItem"
            />
        </div>

        <div className="description">
            <p>{info.description.number}</p>
            <p>{info.description.descrip}</p>
        </div>
    </div>
);

class ProgressBar extends React.Component {
    render() {
        return(
                <ProgressItem  info={ProgressBarConfig[this.props.id]} />
        )
    }
}

export default ProgressBar;