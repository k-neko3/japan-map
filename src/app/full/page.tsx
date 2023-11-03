import FullMap from "../_components/FullMap";
import { Logo } from "../_components/Logo";
export default function Full() {
  return (
    <>
      <div className="mx-auto max-w-[760px] px-[24px] py-[20px]">
        <Logo />
      </div>
      <FullMap />
    </>
  );
}
