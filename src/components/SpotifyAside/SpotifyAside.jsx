import { FaPlus, FaArrowRight, FaList, FaSearch } from "react-icons/fa";

const SpotifyHome = () => {
  return (
    <div className="flex h-screen">
      <aside className="bg-[#121212] w-96 h-screen rounded-xl">
        {/*Div da primeira parte */}
        <div className=" flex justify-between">
          {/*Biblioteca */}
          <div className="flex justify-center p-6 ">
            <FaList
              className="mt-1 text-slate-200 hover:text-white"
              fontSize={20}
            />
            <h2 className="text-slate-200 ml-3 font-semibold text-lg hover:text-white">
              <a href="#">Sua Biblioteca</a>
            </h2>
          </div>

          {/* Icones de + e ->  */}
          <div className="p-7">
            <button className="pr-8">
              <FaPlus color="white" className="text-slate-200 " />
            </button>
            <button>
              <FaArrowRight color="white" className="text-slate-200" />
            </button>
          </div>
        </div>

        {/*Playlist btn */}
        <div className="flex">
          <button className="text-slate-200 p-1 pl-4 pr-4 bg-zinc-800 rounded-full text-sm ml-4 font-semibold">
            Playlist
          </button>
        </div>

        {/*Playlists*/}
        <div className="cursor-pointer p-2">
          {/*Search e Recentes */}
          <div className="p-4 flex items-center justify-between mr-2">
            <FaSearch fontSize={16} className=" text-slate-200" />
            <h3 className="text-slate-200 flex items-center justify-center hover:scale-110 hover:text-white text-sm font-semibold">
              Recentes
              <FaList className="text-slate-200 ml-3 mt-1" />
            </h3>
          </div>

          {/*Cada container de playlist*/}
          <div className="flex p-2 items-center hover:bg-zinc-800 rounded-xl">
            <div className="pr-2">
              <img src="https://placehold.co/50x50" className="rounded-lg" />
            </div>
            <div>
              <h3 className="text-slate-200">Trap Romântico</h3>
              <span className="text-slate-200">aspazinho</span>
            </div>
          </div>

          <div className="flex p-2 items-center hover:bg-zinc-800 rounded-xl">
            <div className="pr-2">
              <img src="https://placehold.co/50x50" className="rounded-lg" />
            </div>
            <div>
              <h3 className="text-slate-200">R&B anos 2000</h3>
              <span className="text-slate-200">aspazinho</span>
            </div>
          </div>

          <div className="flex p-2 items-center hover:bg-zinc-800 rounded-xl">
            <div className="pr-2">
              <img src="https://placehold.co/50x50" className="rounded-lg" />
            </div>
            <div>
              <h3 className="text-slate-200">Antigas de J&M</h3>
              <span className="text-slate-200">aspazinho</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 bg-[#121212] ml-2 rounded-xl">
        <section className="p-6">
        <div className="flex">
          <button className="text-black p-1 pl-3 pr-3 bg-white rounded-full text-sm ml-4 font-semibold hover:bg-zinc-200">
            Tudo
          </button>
          <button className="text-slate-200 p-1 pl-3 pr-3 bg-zinc-800 rounded-full text-sm ml-4 font-semibold hover:bg-zinc-700">
            Música
          </button>
          <button className="text-slate-200 p-1 pl-3 pr-3 bg-zinc-800 rounded-full text-sm ml-4 font-semibold hover:bg-zinc-700">
            Podcast
          </button>
        </div>

        {/*Grid das playlists */}
        <div className="grid grid-cols-4 gap-4 pt-6 pl-4 cursor-pointer">
          <div className="flex items-center bg-[#2A2C30] rounded-md w-auto h-18">
              <img src="https://placehold.co/60x60" className="rounded-lg mr-4" />
            <div>
              <h3 className="text-slate-200 font-semibold text-lg">R&B anos 2000</h3>
            </div>
          </div>

          <div className="flex items-center bg-[#2A2C30] rounded-md w-auto h-18">
              <img src="https://placehold.co/60x60" className="rounded-lg mr-4" />
            <div>
              <h3 className="text-slate-200 font-semibold text-lg">R&B anos 2000</h3>
            </div>
          </div>

          <div className="flex items-center bg-[#2A2C30] rounded-md w-auto h-18">
              <img src="https://placehold.co/60x60" className="rounded-lg mr-4" />
            <div>
              <h3 className="text-slate-200 font-semibold text-lg">R&B anos 2000</h3>
            </div>
          </div>

          <div className="flex items-center bg-[#2A2C30] rounded-md w-auto h-18">
              <img src="https://placehold.co/60x60" className="rounded-lg mr-4" />
            <div>
              <h3 className="text-slate-200 font-semibold text-lg">R&B anos 2000</h3>
            </div>
          </div>

          <div className="flex items-center bg-[#2A2C30] rounded-md w-auto h-18">
              <img src="https://placehold.co/60x60" className="rounded-lg mr-4" />
            <div>
              <h3 className="text-slate-200 font-semibold text-lg">R&B anos 2000</h3>
            </div>
          </div>

          <div className="flex items-center bg-[#2A2C30] rounded-md w-auto h-18">
              <img src="https://placehold.co/60x60" className="rounded-lg mr-4" />
            <div>
              <h3 className="text-slate-200 font-semibold text-lg">R&B anos 2000</h3>
            </div>
          </div>

          <div className="flex items-center bg-[#2A2C30] rounded-md w-auto h-18">
              <img src="https://placehold.co/60x60" className="rounded-lg mr-4" />
            <div>
              <h3 className="text-slate-200 font-semibold text-lg">R&B anos 2000</h3>
            </div>
          </div>

          <div className="flex items-center bg-[#2A2C30] rounded-md w-auto h-18">
              <img src="https://placehold.co/60x60" className="rounded-lg mr-4" />
            <div>
              <h3 className="text-slate-200 font-semibold text-lg">R&B anos 2000</h3>
            </div>
          </div>
        </div>

        {/*Feitos para você */}
        <div className="pl-4">
          <div className="flex items-center justify-between">
            <h2 className="text-slate-200 text-2xl pt-10 font-bold">Feitos para você</h2>
            <p className="text-zinc-400 text-sm pt-10 pr-6 font-bold">Mostrar tudo</p>
          </div>
          
          {/*Cards das playlists */}
          <div className=" grid grid-cols-6 cursor-pointer">
            <div className="w-48 pt-4">
              <img src="https://placehold.co/170x160" className="rounded-lg mr-4"/>
              <div className="text-zinc-400 text-sm w-40">
                <p>Ferrugem, Turma do Pagode, Kamisa 10 e...</p>
              </div>
            </div>

            <div className="w-48 pt-4">
              <img src="https://placehold.co/170x160" className="rounded-lg mr-4"/>
              <div className="text-zinc-400 text-sm w-40">
                <p>Ferrugem, Turma do Pagode, Kamisa 10 e...</p>
              </div>
            </div>

            <div className="w-48 pt-4">
              <img src="https://placehold.co/170x160" className="rounded-lg mr-4"/>
              <div className="text-zinc-400 text-sm w-40">
                <p>Ferrugem, Turma do Pagode, Kamisa 10 e...</p>
              </div>
            </div>

            <div className="w-48 pt-4">
              <img src="https://placehold.co/170x160" className="rounded-lg mr-4"/>
              <div className="text-zinc-400 text-sm w-40">
                <p>Ferrugem, Turma do Pagode, Kamisa 10 e...</p>
              </div>
            </div>

            <div className="w-48 pt-4">
              <img src="https://placehold.co/170x160" className="rounded-lg mr-4"/>
              <div className="text-zinc-400 text-sm w-40">
                <p>Ferrugem, Turma do Pagode, Kamisa 10 e...</p>
              </div>
            </div>

            <div className="w-48 pt-4">
              <img src="https://placehold.co/170x160" className="rounded-lg mr-4"/>
              <div className="text-zinc-400 text-sm w-40">
                <p>Ferrugem, Turma do Pagode, Kamisa 10 e...</p>
              </div>
            </div>
          </div>
        </div>
        </section>
      </main>
    </div>
  );
};

export default SpotifyHome;
