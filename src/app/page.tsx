import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-300">
      {/* <header className="fixed top-0 left-0 right-0 z-50 bg-purple-400 */}
      {/*   text-white p-6 border-b-8 border-black"> */}
      {/*   <div className="container mx-auto"> */}
      {/*     <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">KMIPN 7</h1> */}
      {/*     <p className="text-xl md:text-2xl font-bold mt-2 text-yellow-300">DESIGN SYSTEM</p> */}
      {/*   </div> */}
      {/* </header> */}
      {/* <div className="w-auto items-center max-w-fit absolute border"> */}
      <div className="flex m-auto w-fit gap-4 pt-10 cursor-default">
        <h2 style={{ textShadow: "4px 4px black" }} className="md:hidden w-fit text-5xl md:text-8xl font-black uppercase mb-4 text-white">
          Road To
        </h2>
        <h2 style={{ textShadow: "6px 6px black" }} className="hidden md:flex w-fit text-4xl md:text-8xl font-black uppercase mb-4 text-white">
          Road To
        </h2>
        <h2 style={{ textShadow: "6px 6px black" }} className="hidden md:flex w-fit text-4xl md:text-8xl font-black uppercase mb-4 text-purple-400">
          KMIPN VII
        </h2>
        <h2 style={{ textShadow: "4px 4px black" }} className="md:hidden w-fit text-5xl md:text-8xl font-black uppercase mb-4 text-purple-400">
          KMIPN VII
        </h2>
      </div>
      <div className="m-auto w-fit text-2xl md:text-3xl cursor-default">
        Teknik Komputer 2025
      </div>

      {/* </div> */}
      {/* Body */}
      <main className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-6 pt-32">
        <div className="w-full max-w-md space-y-8 pt-10">
          {/*<div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 text-black">CHOOSE YOUR</h2>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-red-500">ADVENTURE</h3>
          </div>*/}

          {/* Button List */}
          <div className="space-y-6">
            <Button asChild className="w-full bg-purple-500 hover:bg-purple-700 text-white font-black text-xl md:text-2xl uppercase py-6 px-8 border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-150 active:shadow-[2px_2px_0px_0px_#000] active:translate-x-2 active:translate-y-2">
              <Link href="https://kmipn.pnp.ac.id/">KMIPN VII</Link>
            </Button>
            <Button asChild
              className="w-full bg-red-500 text-white font-black text-xl md:text-2xl uppercase py-6 px-8 border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:bg-red-700 hover:shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-150 active:shadow-[2px_2px_0px_0px_#000] active:translate-x-2 active:translate-y-2">
              <Link href="https://drive.google.com/file/d/1q4DxjZT_A3stX_mX_umdczLSoiTu61n_/view?usp=drive_link">Buku Panduan KMIPN VII</Link>
            </Button>

            <Button asChild className="w-full bg-blue-500 hover:bg-blue-700 text-white font-black text-xl md:text-2xl uppercase py-6 px-8 border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-150 active:shadow-[2px_2px_0px_0px_#000] active:translate-x-2 active:translate-y-2">
              <Link href="https://forms.gle/YfLF5bdMXteqLDsBA">Formulir Pendataan</Link>
            </Button>
          </div>
        </div>
        <div className=" absolute bottom-0 mb-4">
          <div className="flex flex-row gap-3 bg-white px-2 py-2 rounded-full">
            <Image
              src="/aruna.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <Image
              src="/psdm.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <Image
              className="mb-1"
              src="/logo-kmipn.webp"
              width={90}
              height={25}
              alt="Picture of the author"
            />
          </div>
        </div>
      </main>

    </div>
  );
}
