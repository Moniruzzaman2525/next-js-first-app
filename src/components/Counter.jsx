"use client"
import React, { useState } from 'react';



const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <button className='text-[20px] border rounded px-10'  onClick={()=> setCount(count + 1)}>+</button>
            <h1 className='text-[20px]'>{count}</h1>
            <button className='text-[20px] border rounded px-10'  onClick={()=> setCount(count + 1)}>-</button>
        </div>
    );
};

export default Counter;