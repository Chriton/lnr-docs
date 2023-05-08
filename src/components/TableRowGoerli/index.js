import React from 'react';
import styles from './styles.module.css';

export default function TableRowGoerli({name, address, info}) {
    return (
        <tr>
            <td>{name}</td>
            <td><a href={`https://goerli.etherscan.io/address/${address}`}>{address}</a></td>
            <td>{info}</td>
        </tr>
        )
}
