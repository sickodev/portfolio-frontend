const Viewers = () => {
  return (
    <div className="fixed bottom-2 p-2 mx-auto text-center bg-neutral-900 rounded-xl shadow-xl border border-neutral-700/50 flex space-x-3">
      <div className="bg-neutral-900 rounded-xl text-neutral-200">
        <span className="p-1 bg-neutral-950 text-2xl font-bold mx-[0.25px]">
          0
        </span>
        <span className="p-1 bg-neutral-950 text-2xl font-bold mx-[0.5px]">
          0
        </span>
        <span className="p-1 bg-neutral-950 text-2xl font-bold mx-[0.5px]">
          0
        </span>
        <span className="p-1 bg-neutral-950 text-2xl font-bold mx-[0.25px]">
          0
        </span>
      </div>
      <button className="p-1 opacity-55 hover:bg-neutral-800 transition-all duration-200 ease-linear hover:opacity-90">
        <i className="fa-solid fa-arrows-rotate"></i>
      </button>
    </div>
  );
};

export default Viewers;
