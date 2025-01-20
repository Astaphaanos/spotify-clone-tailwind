import { FaSearch, FaHome, FaSpotify } from 'react-icons/fa';

const SpotifyHeader = () => {
    return (
        <header>
            <nav className="bg-black p-3 flex items-center justify-between">
                <div className='cursor-pointer ml-4'>
                    <FaSpotify color='white' fontSize={30}/>
                </div>

                <div className='flex'>
                    <button className='bg-zinc-800 rounded-lg p-2 me-6'>
                        <FaHome fontSize={20} color='white'/>
                    </button>
                    

                    <div className='bg-zinc-800 p-3 flex items-center rounded-2xl '>
                        <FaSearch fontSize={20} color='white'/>
                        <input type='search' placeholder='O que queres ouvir?' className='bg-transparent ml-4 focus:outline focus:outline-1 focus:outline-white p-2'></input>
                    </div>
                </div>

                
                <div className='mr-4'>
                    <button className='bg-transparent text-zinc-400 font-bold mr-8 hover:text-white hover:scale-110'>Registra-se</button>
                    <button className='text-black bg-white p-3 font-bold rounded-lg hover:scale-110 hover:bg-slate-50'>Iniciar Sessão</button>
                </div>
            </nav>
        </header>
    )
}

export default SpotifyHeader;