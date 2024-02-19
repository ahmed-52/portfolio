import { useEffect } from "react";

const Navbar = () => {
    return(
            <nav className="p-[35px] flex justify-between items-center">
                <div>
                    <img src='logo.svg'></img>
                </div>
                <div>
                    <ul className="flex gap-5">
                        <a href="#" className="text-3xl font-cabinet font-medium">About</a>
                        <a href="#" className="text-3xl font-cabinet font-medium">Projects</a>
                        <a href="#" className="text-3xl font-cabinet font-medium">Contact</a>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;