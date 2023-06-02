'use client';

import {useEffect, useState} from 'react';

interface ClientOnlyProps {
    children: React.ReactNode;
}

// used to fix special error when refresh
const ClientOnly : React.FC<ClientOnlyProps> = ({children}) => {
    
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    return <>{children}</>;
};

export default ClientOnly;