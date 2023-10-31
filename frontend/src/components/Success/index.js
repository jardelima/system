import { Palanquin } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const palanquin = Palanquin({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-palanquin"
});

export default function Success() {
    return (
        <div className="flex items-center justify-center fixed w-screen h-screen z-10 bg-loading">
            <div className="bg-white p-8 w-full max-w-md rounded-md flex flex-col items-center justify-center shadow-md">
                <Image
                    className="block w-auto object-contain mb-5 opacity-60"
                    src={"/check.png"}
                    width={40}
                    height={40}
                    alt="Imagem de correto."
                />

                <p className={`${palanquin.variable} mb-5 text-center text-sm`}>
                    Cadastro realizado com sucesso!
                </p>

                <Link
                    className="py-3 px-4 bg-green hover:brightness-95 cursor-pointer duration-300 text-white uppercase text-xs font-bold rounded-md w-full max-w-xs text-center"
                    href={"/"}
                >
                    Fazer login
                </Link>
            </div>
        </div>
    );
}
