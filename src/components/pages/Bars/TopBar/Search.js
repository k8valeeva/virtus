import React from 'react';
import "./Search.css";

class Search extends React.Component {
    render() {
        return(
            <form className="inputbox">
                <input required="required"/>
                <button className="del" type="reset"/>
            </form>

        )
    }
}

export default Search;