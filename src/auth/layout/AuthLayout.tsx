import { Outlet } from "react-router-dom";
import { Logo } from "../../shared/components/ui/Logo";
import { useLoading } from "../../app/context/LoadingContext";
import { LoadingOverlay } from "../../shared/components/ui/LoadingCircular";

export const AuthLayout = () => {
  const { isLoading, message } = useLoading();

  return (
    <div className="min-h-screen bg-[#e9f7f3] flex items-center justify-center relative overflow-hidden">
     {isLoading && <LoadingOverlay message={message} />}
   
      {/* Background overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-[#2E3A4E]">
        <div className="absolute inset-0 bg-black opacity-30 backdrop-blur-sm" />
      </div>

      {/* Card container */}
      <div className="relative z-10 w-full max-w-5xl h-[700px] bg-[#EAF1FB] shadow-2xl rounded-2xl flex overflow-hidden backdrop-blur-md">
        
        {/* Left: form side */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-between">
          
          {/* Top branding */}
          <div className="flex items-center gap-3">
            <Logo height={80} width={80} className="mb-1" />
            <p className="text-2xl font-extrabold text-black leading-tight">
              Register<span className="text-[#3372f9] font-medium">Gains</span>
            </p>
          </div>

          {/* Form area */}
          <div className="flex-1 flex flex-col justify-center mt-6">
            <Outlet />
          </div>

          {/* Bottom support text */}
          <p className="text-xs text-center text-gray-500 mt-6">
            Need help? Contact us at{" "}
            <a href="mailto:support@gymapp.com" className="text-[#07857b] underline">
              support@gymapp.com
            </a>
          </p>
        </div>

        {/* Right: image side */}
        <div className="hidden md:block w-1/2 relative">
  {/* Imagen de fondo */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/gym-leading.jpg')" }}
  />


  <div className="relative z-10 flex h-full items-center justify-center text-white px-6">
  </div>
</div>


          </div>
    </div>
  );
};
