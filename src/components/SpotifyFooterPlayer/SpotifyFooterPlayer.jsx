import { FaStepForward, FaStepBackward, FaPlay, FaRandom, FaRedo, FaPencilAlt, FaBars, FaVolumeUp, FaExpand } from 'react-icons/fa';
import { AiFillPlayCircle } from 'react-icons/ai';

const SpotifyHomePage = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-black text-white h-24">
            <div className="flex items-center justify-between">
                {/*Musica */}
                <div className="flex items-center p-6">
                    <img src="https://placehold.co/60x60" className="rounded-lg mr-4"/>
                    <div className="cursor-pointer">
                        <h4 className="text-sm font-bold hover:underline">Brinca Demais</h4>
                        <p className="text-xs text-zinc-400 font-semibold">
                            <a href="#" className='hover:underline hover:text-white mr-1'>WIU,</a>
                            <a href="#" className='hover:underline  hover:text-white mr-1'>Matuê,</a>
                            <a href="#" className='hover:underline  hover:text-white mr-1'>Teto</a>
                        </p>
                    </div>
                </div>

                {/*Controles de Reprodução */}
                <div className='space-x-4 flex flex-col items-center cursor-pointer text-gray-400 '>
                    <div className='flex items-center pb-4 ml-6'>
                        <FaRandom className='mr-6 hover:text-white'/>
                        <FaStepBackward className='mr-6 hover:text-white'/>
                        <FaPlay className='mr-6 hover:text-white'/>
                        <FaStepForward className='mr-6 hover:text-white'/>
                        <FaRedo className='mr-6 hover:text-white'/>
                    </div>

                    <div className='flex items-center space-x-4 w-full'>
                        <span className="text-sm text-gray-400">0:45</span>
                        
                        <div className="relative w-96 h-1 bg-gray-600 rounded-full">
                            <div className="absolute top-0 left-0 h-1 bg-green-500 rounded-full" style={{ width: '25%' }}></div>
                        </div>

                    {/* Duração Total */}
                        <span className="text-sm text-gray-400">3:20</span>
                    </div>
                </div>

                {/*Outros controles de reprodução */}
                <div className='flex items-center cursor-pointer pr-4'>
                    {/*Botão de Play*/}
                    <AiFillPlayCircle className='mr-6 text-gray-400  hover:text-white'/>

                    {/*Botão de microfone*/}
                    <FaPencilAlt className='mr-6 text-gray-400  hover:text-white'/>

                    {/*Botão de fila*/}
                    <FaBars className='mr-6 text-gray-400  hover:text-white'/>

                    {/*Botão de volume*/}
                    <FaVolumeUp className='mr-6 text-gray-400  hover:text-white'/>

                    {/*Botão de expandir*/}
                    <FaExpand className='mr-6 text-gray-400  hover:text-white'/>
                </div>
            </div>
        </footer>
    );
}

export default SpotifyHomePage;