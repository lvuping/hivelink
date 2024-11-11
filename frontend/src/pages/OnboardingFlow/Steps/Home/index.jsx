import paths from "@/utils/paths";
import AnythingLLMLogo from "@/media/logo/hivelink-light.png";
import { useNavigate } from "react-router-dom";

export default function OnboardingHome() {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative w-screen h-screen flex overflow-hidden bg-mobile-onboarding md:bg-main-gradient">
        <div className="relative flex justify-center items-center m-auto">
          <div className="flex flex-col justify-center items-center">
            <p className="text-zinc-300 font-thin text-[24px]">Welcome to</p>
            <img
              src={AnythingLLMLogo}
              alt="HiveLink"
              className="md:h-[50px] flex-shrink-0 max-w-[300px]"
            />
            <button
              onClick={() => navigate(paths.onboarding.llmPreference())}
              className="animate-pulse w-full md:max-w-[350px] md:min-w-[300px] text-center py-3 bg-white text-black font-semibold text-sm my-10 rounded-md hover:bg-gray-200"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
