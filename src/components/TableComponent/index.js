import React from 'react';
import styles from './styles.module.css';

export default function TableComponent({children}) {

    return (
        <table>
            <thead>
            <tr>
                <th>Contract</th>
                <th>Address</th>
                <th>Info</th>
            </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

