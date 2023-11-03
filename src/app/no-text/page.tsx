import NoTextMap from "../_components/NoTextMap";
import { Logo } from "../_components/Logo";
export default function NoText() {
  return (
    <>
      <div className="mx-auto max-w-[760px] px-[24px] py-[20px]">
        <Logo />
      </div>
      <NoTextMap />
    </>
  );
}
