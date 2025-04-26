import ConfigPassword from "./components/ConfigPassword";
import PassswordContainer from "./components/PassswordContainer";
import usePasswordStore from "./hooks/store";

export default function App() {
  const newPassword = usePasswordStore((state) => state.newPassword);
  return (
    <>
      <h1 className="textPreset4 tablet:!text-[1.5em] tablet:!mb-[2em] !mb-[1em] text-center text-gray-600">
        Password Generator
      </h1>
      <section className="tablet:w-[33.75em] tablet:!px-[2em] tablet:h-[5em] desktop:w-[30%] flex w-[21.4375em] items-center justify-between bg-gray-800 !p-[1em]">
        <PassswordContainer password={newPassword} />
      </section>
      <section className="tablet:w-[33.75em] tablet:!py-[1.5em] tablet:!px-[2em] desktop:w-[30%] !mt-4 h-fit w-[21.4375em] bg-gray-800 !p-[1em]">
        <ConfigPassword />
      </section>
    </>
  );
}
