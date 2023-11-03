import PlainHoverMap from "../_components/PlainHoverMap";
import { Logo } from "../_components/Logo";
export default function PlaneHover() {
  return (
    <>
      <div className="mx-auto max-w-[760px] px-[24px] py-[20px]">
        <Logo />
      </div>
      <PlainHoverMap />
    </>
  );
}
