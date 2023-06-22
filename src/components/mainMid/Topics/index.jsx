export function Topics () {
  return (
    <div className="flex gap-4 sm:w-80 pl-2">
      <div className="border-4 rounded-full flex items-center justify-center w-24 h-15 sm:h-16 border-mainVerde text-mainVerde">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          class="bi bi-activity"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12  7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
          />
        </svg>
      </div>

      <div>
        <p className="font-bold">Cardiologia</p>

        <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, soluta.</p>
      </div>

    </div>
  );
}