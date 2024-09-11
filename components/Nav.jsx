"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedin = true;

  return (
    <nav className="flex-between w-full p-4">
      <Link href="/" className="flex-center">
        <p>LOGO IMG</p>
      </Link>

      <p>ContentCurator</p>

      <div className="sm:flex hidden">
        {isUserLoggedin ? (
          <div>
            <Link href="/create-prompt" className="flex-center">
              Create Post
            </Link>
          </div>
        ) : (
          <>No Auth</>
        )}
      </div>
    </nav>
  );
};

export default Nav;
