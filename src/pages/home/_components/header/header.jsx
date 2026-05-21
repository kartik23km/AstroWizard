import Button from "@/components/atoms/button";
import Navbar from "./navbar";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="flex justify-between items-center mx-10 my-5">
      <div className="border border-white rounded-xl px-5 py-2">Logo</div>
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <Button
          title={
            <span className="flex items-center gap-2">
              <ChatBubbleLeftRightIcon className="size-5" />
              Chat Now
            </span>
          }
          onClick={() => console.log("Chat Now clicked")}
          className="px-6 py-3 font-semibold text-sm tracking-wider uppercase bg-linear-to-r from-primary to-violet-glow text-white rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)] border-none hover:shadow-[0_0_30px_rgba(168,85,247,0.55)] transition-all duration-300 transform active:scale-95"
        />
      </div>
    </div>
  );
};

export default Header;
