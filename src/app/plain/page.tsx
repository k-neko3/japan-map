import PlainMap from "../_components/PlainMap";
import { Logo } from "../_components/Logo";
export default function Plain() {
  return (
    <>
      <div className="mx-auto  max-w-[760px] px-[24px] py-[20px]">
        <Logo />
      </div>
      <PlainMap />
    </>
  );
}
