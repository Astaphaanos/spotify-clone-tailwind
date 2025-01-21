import { FaSearch, FaHome, FaSpotify, FaUser, FaBell } from 'react-icons/fa';

const SpotifyHeader = () => {
    return (
        <header>
            <nav className="p-3 flex items-center justify-between">
                
                {/* Icon Spotify */}
                <div className='cursor-pointer ml-4'>
                    <FaSpotify color='white' fontSize={30}/>
                </div>

                {/*Home */}
                <div className='flex items-center'>
                    <button className='bg-zinc-800 rounded-full me-6 ml-16 w-12 h-12 p-3 hover:scale-105'>
                        <FaHome fontSize={24} color='white'/>
                    </button>
                    
                    {/* Search */}
                    <div 
                    className='bg-zinc-800 flex items-center rounded-full w-[30rem] pl-4 font-semibold hover:bg-zinc-700 border border-transparent focus-within:border-white focus-within:border-2'>
                        <FaSearch fontSize={20} color='white'/>
                        <input type='search'
                        placeholder='O que queres ouvir?' 
                        className='bg-transparent ml-4 focus:outline-none p-3 w-full caret-white'></input>
                    </div>
                </div>

                {/*Registra-se e Iniciar Sessão */}
                <div className='mr-2'>
                    <button className='bg-transparent text-zinc-400 font-bold mr-8 hover:text-white hover:scale-105'>
                        <FaBell/>
                    </button>
                    <button className='text-black bg-zinc-800 p-3 font-bold rounded-full hover:scale-105'>
                        <FaUser color='white'/>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default SpotifyHeader;