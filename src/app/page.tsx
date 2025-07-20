import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-300 pt-20">
      {/* <header className="fixed top-0 left-0 right-0 z-50 bg-purple-400 */}
      {/*   text-white p-6 border-b-8 border-black"> */}
      {/*   <div className="container mx-auto"> */}
      {/*     <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">KMIPN 7</h1> */}
      {/*     <p className="text-xl md:text-2xl font-bold mt-2 text-yellow-300">DESIGN SYSTEM</p> */}
      {/*   </div> */}
      {/* </header> */}
      {/* <div className="w-auto items-center max-w-fit absolute border"> */}

      <div className="flex m-auto w-fit px-4 py-2 gap-4 cursor-default ">
        {/*   <h2 className="sm:hidden w-fit text-3xl md:text-8xl font-black uppercase mb-4 text-black mt-0.5"> */}
        {/*     Road To */}
        {/*   </h2> */}
        {/*   <h2 className="hidden sm:flex w-fit text-4xl md:text-8xl font-black uppercase mb-4 text-black mt-0.5"> */}
        {/*     Road To */}
        {/*   </h2> */}
        {/*   <h2 style={{ textShadow: "6px 6px black" }} className="hidden sm:flex w-fit text-4xl md:text-8xl font-black uppercase mb-4 text-purple-400"> */}
        {/*     KMIPN VII */}
        {/*   </h2> */}
        {/*   <h2 style={{ textShadow: "3px 3px black" }} className="sm:hidden w-fit text-3xl md:text-8xl font-black uppercase mb-4 text-purple-400"> */}
        {/*     KMIPN VII */}
        {/*   </h2> */}
        <Image
          className="flex md:hidden"
          src="/Headline.png"
          width={200}
          height={200}
          alt="Picture of the author"
        />
        <Image
          className="hidden md:flex"
          src="/Headline.png"
          width={400}
          height={200}
          alt="Picture of the author"
        />
      </div>
      <div className="m-auto w-fit -translate-y-8 md:-translate-y-12 text-xs  md:text-2xl cursor-default bg-white font-black rounded-full px-6 shadow-[4px_4px_0px_0px_#000] md:shadow-[8px_8px_0px_0px_#000]">
        Teknik Komputer 2025
      </div>

      {/* </div> */}
      {/* Body */}
      <main className="flex-1 flex flex-col items-center justify-center  p-6">
        <div className="w-full max-w-md ">
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
              <Link href="https://drive.google.com/file/d/1Opyu1B3L8LqIxrcR8Kt4W30tv-OzLJNK/view?usp=drivesdk">Panduan Daftar KMIPN VII 2025</Link>
            </Button>
            <Button asChild
              className="w-full bg-red-500 text-white font-black text-xl md:text-2xl uppercase py-6 px-8 border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:bg-red-700 hover:shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-150 active:shadow-[2px_2px_0px_0px_#000] active:translate-x-2 active:translate-y-2">
              <Link href="https://drive.google.com/file/d/1q4DxjZT_A3stX_mX_umdczLSoiTu61n_/view?usp=drive_link">Buku Panduan KMIPN VI 2024</Link>
            </Button>

            <Button asChild className="w-full bg-blue-500 hover:bg-blue-700 text-white font-black text-xl md:text-2xl uppercase py-6 px-8 border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-150 active:shadow-[2px_2px_0px_0px_#000] active:translate-x-2 active:translate-y-2">
              <Link href="https://forms.gle/YfLF5bdMXteqLDsBA">Formulir Pendataan</Link>
            </Button>
          </div>
        </div>
        <Link href="https://wa.me/6289526907311">
          <div className="transition-all fixed right-0 bottom-0 flex flex-row mb-20 mr-6">
            <div className="flex flex-row gap-3 bg-white px-4 py-2 rounded-full shadow-[6px_6px_0px_0px_#000]">
              {/* <Image */}
              {/*   src="/aruna.png" */}
              {/*   width={30} */}
              {/*   height={30} */}
              {/*   alt="Picture of the author" */}
              {/* /> */}
              <Phone className="m-auto" />
              <div className="hidden md:flex md:flex-col">
                <div className="font-black">Contact Person</div>
                <div>- Tri Ambar</div>
              </div>
            </div>
            <div className="relative" >
              <div className="absolute bg-white bottom-0 p-2 md:p-4 skew-[5deg] md:skew-[10deg] -left-4 md:-left-8 top-6 md:top-8 shadow-[6px_6px_0px_0px_#000]" >

              </div>
            </div>
          </div>
        </Link>
        <div className=" fixed bottom-0 mb-4">
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
