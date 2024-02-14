const Navbar = () => {
    return(
        <div>
            <nav className="p-[35px] flex justify-between items-center">
                <div>
                    <img src='logo.svg'></img>
                </div>
                <div>
                    <ul className="flex gap-5">
                        <li className="text-3xl font-cabinet font-medium">About</li>
                        <li className="text-3xl font-cabinet font-medium">Projects</li>
                        <li className="text-3xl font-cabinet font-medium">Contact</li>
                    </ul>
                </div>
            </nav>
      </div>
    )
}

export default Navbar;