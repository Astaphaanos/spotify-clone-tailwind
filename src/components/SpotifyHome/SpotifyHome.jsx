import { FaPlus, FaArrowRight, FaList } from "react-icons/fa";

const SpotifyHome = () => {
  return (
    <aside className="bg-[#121212] w-96 h-screen rounded-xl">
    {/*Div da primeira parte */}
      <div className=" flex justify-between">

        {/*Biblioteca */}
        <div className="flex justify-center p-6">
            <FaList className="mt-1 text-slate-200" fontSize={20}/>
            <h2 className="text-slate-200 ml-3 font-semibold text-lg">
                Sua Biblioteca
            </h2>
        </div>

        {/* Icones de + e ->  */}
        <div className="p-7">
          <button className="pr-8">
            <FaPlus color="white" className="text-slate-200"/>
          </button>
          <button>
            <FaArrowRight color="white" className="text-slate-200"/>
          </button>
        </div>
    </div>

    {/*Playlists*/}
    <div>
        {/*Cada container de playlist*/}
        <div className="">
            <div>
                <img src="https://placehold.co/50x50"/>
            </div>
            <div>
                <h3 className="text-slate-200">Trap</h3>
                {/**Colocar o icone aqui */}
                <span className="text-slate-200">Playlist eco</span>
            </div>
        </div>
    </div>

    </aside>
  );
};

export default SpotifyHome;
