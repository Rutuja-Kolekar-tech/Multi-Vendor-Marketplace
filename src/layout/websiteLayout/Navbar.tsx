import PiczyLogo from "../../../public/p.png";

const Navbar = () => {
    
    return (
        <>
            <nav className="w-full border-b bg-white px-6 py-4 flex item-center justify-between">
                <div>
                    <img
                        src={PiczyLogo}
                        alt="logo"
                        className="h-10 w-auto object-contain "
                    />

                </div>
           </nav>
        </>
    )
}

export default Navbar;