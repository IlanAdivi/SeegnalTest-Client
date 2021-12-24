import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import Ingrdient from './ingrdient/Ingrdient';
import '../../styles/Ingrdients.css';

function Ingrdients() {
    const [ingrdients, setIngrdients] = useState([]);

    const getMainIngrdients = async reaction => {
        if (reaction) {
            const URL = `https://localhost:44307/Ingredient/GetMainIngredients`;
            const response = await axios.get(URL, {
                params: {
                    reaction
                },
            });
            setIngrdients(response.data);
        }
    };

    const onSearchSubmit = reaction => {
        getMainIngrdients(reaction);
    };

    useEffect(() => {
        onSearchSubmit('death');
    }, []);

    return (
        <div>
            <SearchBar onSearchSubmit={onSearchSubmit} />

            {ingrdients.length === 0 ?
                <h4>No Results</h4>
                :
                <div className="ingrdients-table">
                    <table className="ui celled table">
                        <thead>
                            <tr>
                                <th>Name of Ingrdient</th>
                                <th>Count</th>
                                <th>Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ingrdients.map(ingrdient => {
                                return (
                                    <Ingrdient
                                        ingrdient={ingrdient}
                                        key={ingrdient.name}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
}

export default Ingrdients;