'use client';

import { User } from "@prisma/client";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import SquareJS from "../SquareJS";

interface NavbarProps {
    // pipe (|) means that the prop can be of either type
    currentUser?: User | null;
}

const Navbar : React.FC<NavbarProps> = ({
        currentUser
}) => {
    console.log({currentUser});
    return (
        // it is the navgation bar
        // you can change the background color of the navigation bar here
        // you can also change the shadow of the navigation bar here

        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div
                className="
                    py-4
                    border-b[1px]
                "
            >
                <Container>
                    <SquareJS value="123"></SquareJS>                    
                    <div
                        className="
                        flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
                        md:gap-0
                    "
                    >
                        <Logo />
                        <Search />
                        <UserMenu currentUser={currentUser}/>
                    </div>
                </Container>
            </div>
        </div>
    );
};
export default Navbar;
