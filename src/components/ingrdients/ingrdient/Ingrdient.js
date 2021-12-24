import React from 'react';

function Ingrdient({ ingrdient }) {
    return (
        <tr>
            <td>{ingrdient.name}</td>
            <td>{ingrdient.count}</td>
            <td>{ingrdient.percentage}</td>
        </tr>
    );
}

export default Ingrdient;