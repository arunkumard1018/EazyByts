import React from 'react'

function page() {
    return (
        <div className='mt-24'>
            <div className='text-4xl text-center font-medium text-green-500'>App Working Fine Check with Components</div>
            <p className='text-center text-red-400'>{process.env.END_API_URL}</p>
        </div>
    )
}

export default page