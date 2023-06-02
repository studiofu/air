"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return (
        // show logo here
        // you can change the height and width of the logo here
        // you can also change the image source here
        // you can also add a link to the logo here
        <Image
            alt="Logo"
            className="hidden md:block cursor-pointer"
            height="100"
            width="100"            
            src="/images/logo.png"
        />
    );
};

export default Logo;
