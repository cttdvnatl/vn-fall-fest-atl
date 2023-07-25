import React from 'react';
import { Link } from 'react-router-dom';

export default function RaffleLink () {
    const raffleLink = <Link className='rafflelink' to="https://www.vesolhmt.org">Buy raffle tickets</Link>
    return (
        <>
          <p> {raffleLink}</p>
        </>
    );
}