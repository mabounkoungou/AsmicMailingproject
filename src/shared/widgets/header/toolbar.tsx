"use client";

import { useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const Toolbar = () => {

  return (
    <>
     
    
          <Link href={"/dashboard"}>
            <Image
              src={""}
              alt=""
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>
       
    
        <Link href={"/sign-in"}><Button className="btn btn-primary">Signin</Button></Link>
     
    </>
  );
};

export default Toolbar;