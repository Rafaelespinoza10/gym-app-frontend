export const LoadingOverlay = ({ message = "Loading..." }: { message?: string }) => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/40">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-t-[#5386F4] border-gray-300 rounded-full animate-spin" />
          <p className="text-sm tracking-wide text-gray-700">{message}</p>
        </div>
      </div>
    );
  };
  