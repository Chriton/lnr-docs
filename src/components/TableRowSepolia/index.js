import React from 'react';
import styles from './styles.module.css';

export default function TableRowSepolia({name, address, info}) {
    return (
        <tr>
            <td>{name}</td>
            <td><a href={`https://sepolia.etherscan.io/address/${address}`} target="_blank" rel="noopener noreferrer">{address}</a></td>
            <td>{info}</td>
        </tr>
        )
}
