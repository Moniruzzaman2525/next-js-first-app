"use client"

const ErrorPage = ({ error, reset }) => {
    return (
        <div>
            <h1 className='text-center text-red-500 my-5 text-4xl'>Something went wrong!!!</h1>
            <p className='text-center text-red-500 my-5 text-xl'>{error.message}</p>

            <div onClick={() => reset()} className="text-center">
                <button className="bg-red-500 text-white px-4 py-2 rounded">Try Again</button>
            </div>
        </div>
    );
};

export default ErrorPage;
