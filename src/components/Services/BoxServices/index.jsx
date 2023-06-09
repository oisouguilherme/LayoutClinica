export function BoxServices({title}){
  return (
    <div className=" w-72  p-3 bg-white shadow-2xl rounded-md space-y-2">

      <div className="h-2 bg-cyan-400 rounded-lg">
      </div>

      <div className="flex items-center gap-4">
        <div className="border-4 border-cyan-400 text-cyan-600 rounded-full p-4 w-28 h-16 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-heart-pulse-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9H1.475Z" />
            <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.88Z" />
          </svg>
        </div>

        <div className="p-2">
          <p className="font-bold">{title}</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illo
            inventore eos in explicabo
          </p>
        </div>
      </div>
    </div>
  );
}