import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about what I do?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout my portfolio
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://gurkiratsingh.dev" target='_blank' rel='noopener noreferrer'>
                    Gurkirat's Portfolio
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src='https://firebasestorage.googleapis.com/v0/b/blog-6a1ee.appspot.com/o/portfolio.png?alt=media&token=d0ae638f-662f-4a3e-99cd-18d8018694a1' alt='Portfolio'/>
        </div>
    </div>
  )
}