'use client';

import {Toaster} from 'react-hot-toast';

// need to use this to avoid SSR error

const ToasterProvider = () => {
    return (
        <Toaster
        />
    )
}

export default ToasterProvider;
