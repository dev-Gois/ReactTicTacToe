import React, { useState } from 'react'
import Square from './Square'
export default function TicTacToe() {
    const [xFlag, setXFlag] = useState(true);
    const [fields, setFields] = useState(Array(9).fill(null))
    const [current, setCurrent] = useState('Jogador Atual: X')

    function handleSquare(position) {
        const nextFields = fields.slice();
        if (fields[position] || declareWinner(fields)) {
            return;
        }
        if(xFlag) {
            nextFields[position] = 'X';
            setCurrent('Jogador Atual: O');
        } else {
            nextFields[position] = 'O';
            setCurrent('Jogador Atual: X');
        }
        setFields(nextFields);
        setXFlag(!xFlag);
    }

    const winner = declareWinner(fields)

    if(winner) {
        setCurrent("Vencedor: " + winner);
        setFields(Array(9).fill(null))
    } else if (!fields.includes(null)) {
        setCurrent('Deu velha!');
        setFields(Array(9).fill(null));
    }
    function declareWinner(fields) {
        const possibilities = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for (let indice = 0; indice < possibilities.length; indice++) {
            const [a,b,c] = possibilities[indice];
            if(fields[a] !== null && fields[b] !== null && fields[c] !== null) {
                if(fields[a] === fields[b] && fields[a] === fields[c]) {
                    return fields[a];
                };
            };
        };
        return null;
    }
    return (
        <div className='wrapper'>
            <h1 className='texto'>{current}</h1>
            <div className='row'>
                <Square value={fields[0]} handleSquare={handleSquare} position={0}/>
                <Square value={fields[1]} handleSquare={handleSquare} position={1}/>
                <Square value={fields[2]} handleSquare={handleSquare} position={2}/>
            </div>
            <div className='row'>
                <Square value={fields[3]} handleSquare={handleSquare} position={3}/>
                <Square value={fields[4]} handleSquare={handleSquare} position={4}/>
                <Square value={fields[5]} handleSquare={handleSquare} position={5}/>
            </div>
                <div className='row'>
                <Square value={fields[6]} handleSquare={handleSquare} position={6}/>
                <Square value={fields[7]} handleSquare={handleSquare} position={7}/>
                <Square value={fields[8]} handleSquare={handleSquare} position={8}/>
            </div>
        </div>
    )
}
