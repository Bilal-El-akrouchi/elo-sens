import './Header.css'
import Image from 'next/image'
export default function Header() {
    return(
        <>
        <header className='w-full h-screen flex  justify-center items-center flex-col text-white'>

            <h1 id='who' className='uppercase'>Elo'sens accompagne votre développement personnel grâce à la pair-aidance </h1>
        </header>
        </>
    )
}