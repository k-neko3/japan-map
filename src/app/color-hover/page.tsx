import ColorHoverMap from "../_components/ColorHoverMap";
import { Logo } from "../_components/Logo";
export default function ColorHover() {
  return (
    <>
      <div className="mx-auto max-w-[760px] px-[24px] py-[20px]">
        <Logo />
      </div>
      <ColorHoverMap />
    </>
  );
}
