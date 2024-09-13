// components/ErrorPage.tsx
import { FlipHorizontal, Minus } from 'lucide-react';
import { Button } from '../ui/button';


export function ServerError() {
    return (
        <div className='mt-24'>
            <div className='text-4xl text-center font-medium'>Internal Server Error</div>
            <p className='text-center text-red-400'>{process.env.END_API_URL}</p>
        </div>
    )
}


export function InternalServerError({ message, reset }: { message?: string, reset: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <div className='flex items-end justify-items-center space-x-2'>
                <div className='h-[8vh] flex items-center justify-center'><h1 className="text-5xl font-bold text-white mb-4 border-r px-2">500</h1></div>
                <div className='h-[8vh] flex items-center justify-center'> <p className='text-sm  text-white mb-4'>Internal Server Error</p></div>
            </div>
            <p className='text-white text-sm'>{message}</p>
            <Button className="px-4 mt-4 py-2 bg-secondary  rounded-lg" variant={'ghost'}
                onClick={() => reset()}>Try Again</Button>
        </div>
    );
}
