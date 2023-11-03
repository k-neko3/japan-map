import Link from "next/link";
import { Buildings } from "./_svg/Buildings";
import { GlobeAsiaAustralia } from "./_svg/GlobeAsiaAustralia";
import { ArrowsFullScreen } from "./_svg/ArrowsFullScreen";
import { RocketTakeoff } from "./_svg/RocketTakeoff";
import { PaintBucket } from "./_svg/PaintBucket";
import { PaletteFill } from "./_svg/PaletteFill";
import { Logo } from "./_components/Logo";

export default function Home() {
  return (
    <>
      <div className="mx-auto min-h-full max-w-[760px] px-[24px] pb-[150px]">
        <div className="h-[50px] py-[20px]">
          <Logo />
        </div>
        <div className="mt-[20px] grid gap-6 min-[450px]:grid-cols-2 md:mt-[150px] md:grid-cols-3">
          <Link href="/plain">
            <div className="rounded-[22px] bg-gradient-to-b from-[#4e99d0] to-[#89c9e4] p-[24px] transition duration-300 hover:scale-[1.02]">
              <h2 className="text-xl font-bold">無地</h2>
              <div className="flex w-full justify-end">
                <div className="mt-[40px] h-[100px] w-[100px]">
                  <GlobeAsiaAustralia />
                </div>
              </div>
            </div>
          </Link>
          <Link href="/plain-hover">
            <div className="rounded-[22px] bg-gradient-to-b from-[#4e99d0] to-[#37b937] p-[24px] transition duration-300 hover:scale-[1.02]">
              <h2 className="text-xl font-bold">無地ホバー</h2>
              <div className="flex w-full justify-end">
                <div className="mt-[40px] h-[100px] w-[100px]">
                  <Buildings />
                </div>
              </div>
            </div>
          </Link>
          <Link href="/no-text">
            <div className="rounded-[22px] bg-gradient-to-b from-[#37b937] to-[#a4be27] p-[24px] transition duration-300 hover:scale-[1.02]">
              <h2 className="text-xl font-bold">県名なし</h2>
              <div className="flex w-full justify-end">
                <div className="mt-[40px] h-[100px] w-[100px]">
                  <RocketTakeoff />
                </div>
              </div>
            </div>
          </Link>
          <Link href="/color">
            <div className="rounded-[22px] bg-gradient-to-b from-[#a4be27] to-[#f5ad4b] p-[24px] transition duration-300 hover:scale-[1.02]">
              <h2 className="text-xl font-bold">カラー</h2>
              <div className="flex w-full justify-end">
                <div className="mt-[40px] h-[100px] w-[100px]">
                  <PaletteFill />
                </div>
              </div>
            </div>
          </Link>
          <Link href="/color-hover">
            <div className="rounded-[22px] bg-gradient-to-b from-[#f5ad4b] to-[#dd7a84] p-[24px] transition duration-300 hover:scale-[1.02]">
              <h2 className="text-xl font-bold">カラーホバー</h2>
              <div className="flex w-full justify-end">
                <div className="mt-[40px] h-[100px] w-[100px]">
                  <PaintBucket />
                </div>
              </div>
            </div>
          </Link>
          <Link href="/full">
            <div className="rounded-[22px] bg-gradient-to-b from-[#db8b93] to-[#e96861] p-[24px] transition duration-300 hover:scale-[1.02]">
              <h2 className="text-xl font-bold">フル</h2>
              <div className="flex w-full justify-end">
                <div className="mt-[40px] h-[100px] w-[100px]">
                  <ArrowsFullScreen />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
