

const ErrorCard = ({refetch} : { refetch: () => void}) => {
  return (
     <div className="container mx-auto px-4 flex flex-col gap-4 items-center justify-center border border-gray-200 bg-gray-50 w-full sm:w-80 h-fit py-8">
              <img
                src="/icons/close-red.svg"
                alt="error"
                className=" w-30 sm:w-40 sm:h-40"
              />
              Sorry an error occured
              <button
                onClick={() => {
                 refetch() ;
                }}
                className="w-fit px-9 py-2 bg-secondary text-white font-medium tex-sm rounded-md"
              >
                {" "}
                Retry
              </button>
            </div>
  )
}

export default ErrorCard