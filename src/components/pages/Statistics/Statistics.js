import React from 'react';
import HomeLineChart from "../././Home/components/charts/HomeLineChart";
import MUIDataTable from "mui-datatables";
import "./Statistics.css";
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';


const columns = ["Campaing", "Time", "Views", "Visitors", "STR", "SPS", "SPV", "SPM", "Status"];

const data = [
    ["Lorem ipsum dolor sit amet tetur", "6 days", "358000", "58200", "25", "3.02", "2.51", "28.35", "Active"],
    ["Sed do eiusmod tempor", "7 hours", "1200", "800", "10", "8.45", "6.13", "45.22", "Disable"],
    ["Consectetur adipisicing elit sed", "3 days", "69000", "7300", "19", "6.22", "3.90", "37.80", "Active"],
];

const options = {
    print:false,
    filterType:'dropdown',
    search:false,
    toolbar:false,
    actions:false,backgroundColor: "transparent",

    filter:false,
    download:false,
};
class Statistics extends React.Component {
    getMuiTheme = () => createMuiTheme({
        overrides: {
            MUIDataTableBodyCell: {
                root: {
                    backgroundColor: "transparent"
                }
            }
        }
    });

    render() {
        return(
            <div>
                <HomeLineChart/>
                <MuiThemeProvider theme={this.getMuiTheme()}>

                <MUIDataTable
                    title={"Employee List"}
                    data={data}
                    columns={columns}
                    options={options}
                />
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Statistics;