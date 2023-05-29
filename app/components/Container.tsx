'use client';

interface ContainerProps {
    children: React.ReactNode;
}

const Container : React.FC<ContainerProps> = ({children}) => {
    return (
        // manage the width of the container here
        // max-w-[2520px] is the max width of the container
        // mx-auto is the margin on the left and right of the container
        // xl:px-20 is the padding on the left and right of the container on extra large screens
        // md:px-10 is the padding on the left and right of the container on medium screens
        // sm:px-2 is the padding on the left and right of the container on small screens
        // px-4 is the padding on the left and right of the container on extra small screens
        // you can change the padding and margin values to your liking
        // you can also add more padding and margin values for different screen sizes
        <div className="
        max-w-[2520px]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-2
        px-4
        ">
            {children}
        </div>
    );

}

export default Container;
