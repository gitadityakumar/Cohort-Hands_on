export default function Loading() {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
          <span className="ml-2">Loading</span>
        </div>
      </div>
    );
  }
  