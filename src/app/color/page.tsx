import ColorMap from "../_components/ColorMap";
import { Logo } from "../_components/Logo";
export default function Color() {
  return (
    <>
      <div className="mx-auto max-w-[760px] px-[24px] py-[20px]">
        <Logo />
      </div>
      <ColorMap />
    </>
  );
}
