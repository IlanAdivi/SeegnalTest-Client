import React, { useState } from "react";
import '../../styles/SearchBar.css';

function SearchBar({ onSearchSubmit }) {
    const [reaction, setReaction] = useState("");

    const onChangeReaction = e => {
        setReaction(e.target.value);
    };

    const onClickSearch = e => {
        e.preventDefault();
        onSearchSubmit(reaction);
    };

    return (
        <div className="search-bar">
            <h3 className="search-title">Search for reaction:</h3>
            <div className="ui input" id="search-bar-form">
                <input
                    onChange={onChangeReaction}
                    value={reaction}
                />

                <button
                    className="ui button"
                    type="submit"
                    disabled={reaction === "" ? true : false}
                    onClick={onClickSearch}
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export default SearchBar;