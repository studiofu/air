import Container from "../../Container";
import Logo from "../Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
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
                        <UserMenu />
                    </div>
                </Container>
            </div>
        </div>
    );
};
export default Navbar;
