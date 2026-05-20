import Button from "@/components/atoms/button";
import Navbar from "./navbar";

const Header = () => {
    return (
        <div className="flex justify-between items-center mx-10 my-5">
            <div className="border border-white rounded-xl px-5 py-2">Logo</div>
            <div className=""><Navbar /></div>
            <div className=""><Button title="Consult" variant="primary" /></div>
        </div>
    )
};

export default Header