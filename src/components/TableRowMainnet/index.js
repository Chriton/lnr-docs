import React from 'react';
import styles from './styles.module.css';

export default function TableRowMainnet({name, address, info}) {
    return (
        <tr>
            <td>{name}</td>
            <td><a href={`https://etherscan.io/address/${address}`}>{address}</a></td>
            <td>{info}</td>
        </tr>
        )
}
