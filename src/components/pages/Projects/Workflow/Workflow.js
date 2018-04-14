import React from 'react';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';

const columns = ["Name", "Company", "City", "State"];

const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
];
const options = {
    print:false,
    filterType:'dropdown',
    search:false,
    toolbar:false,
    actions:false,

    filter:false,
    download:false,
};
class Workflow extends React.Component {

    getMuiTheme = () => createMuiTheme({
        overrides: {
            MUIDataTableBodyCell: {
                root: {
                    backgroundColor: "#333"
                }
            }
        }
    });

    render() {
        return(
            <div>
                    <MuiThemeProvider theme={this.getMuiTheme()}>
                    <MUIDataTable
                        theme={this.getMuiTheme()}
                        data={data}   options={options}
                        columns={columns}/>


                </MuiThemeProvider>
            </div>
        )
    }
}

export default Workflow;

