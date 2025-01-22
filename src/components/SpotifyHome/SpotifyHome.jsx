import { FaPlus, FaArrowRight, FaList } from "react-icons/fa";

const SpotifyHome = () => {
  return (
    <aside className="bg-[#121212] w-96 h-screen rounded-xl">
    {/*Div da primeira parte */}
      <div className=" flex justify-between">

        {/*Biblioteca */}
        <div className="flex justify-center p-6 ">
            <FaList className="mt-1 text-slate-200 hover:text-white" fontSize={20}/>
            <h2 className="text-slate-200 ml-3 font-semibold text-lg hover:text-white">
                <a href="#">Sua Biblioteca</a>
            </h2>
        </div>

        {/* Icones de + e ->  */}
        <div className="p-7">
          <button className="pr-8">
            <FaPlus color="white" className="text-slate-200 "/>
          </button>
          <button>
            <FaArrowRight color="white" className="text-slate-200"/>
          </button>
        </div>
    </div>

    {/*Playlists*/}
    <div className="cursor-pointer p-2">
        {/*Cada container de playlist*/}
          <div className="flex p-2 items-center hover:bg-zinc-800 rounded-xl">
            <div className="pr-2">
                <img src="https://placehold.co/50x50"
                className="rounded-lg"/>
            </div>
            <div>
                <h3 className="text-slate-200">Trap Romântico</h3>
                <span className="text-slate-200">
                  aspazinho
                </span>
            </div>
        </div>

        <div className="flex p-2 items-center hover:bg-zinc-800 rounded-xl">
            <div className="pr-2">
                <img src="https://placehold.co/50x50"
                className="rounded-lg"/>
            </div>
            <div>
                <h3 className="text-slate-200">R&B anos 2000</h3>
                <span className="text-slate-200">
                  aspazinho
                </span>
            </div>
        </div>

        <div className="flex p-2 items-center hover:bg-zinc-800 rounded-xl">
            <div className="pr-2">
                <img src="https://placehold.co/50x50"
                className="rounded-lg"/>
            </div>
            <div>
                <h3 className="text-slate-200">Antigas de J&M</h3>
                <span className="text-slate-200">
                  aspazinho
                </span>
            </div>
        </div>
    </div>

    </aside>
  );
};

export default SpotifyHome;
