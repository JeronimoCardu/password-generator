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
      <section className="tablet:w-[60%] desktop:w-[30%] flex w-full justify-between bg-gray-800 !p-[1em]">
        <PassswordContainer password={newPassword} />
      </section>
      <section className="tablet:w-[60%] desktop:w-[30%] !mt-4 w-full bg-gray-800">
        <ConfigPassword />
      </section>
    </>
  );
}
