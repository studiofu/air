'use client';

import Image from 'next/image'
import { use, useEffect } from 'react';
//import { useSession, getSession } from "next-auth/react"
//import { signIn, signOut, useSession } from 'next-auth/react';


export default function Home() {
  //const { data: session, status } = useSession()

  const test = {
    "name": "John Doe",
    changeName : (i : string) => { 
      test.name = i;
     }
  }
  useEffect(() => {
    console.log("test.name", test.name)
    test.changeName("OK")
    console.log("test.name", test.name)    
  }, [test.name]);

  return (
    <div className="text-rose-500 text-2xl">
      Hello. This is testing.
    </div>
  )
}
