import { Slider } from "@chakra-ui/react/slider";
import { useState } from "react";

export default function SliderWords() {
  const [isActive, setIsActive] = useState(false);
  return (
    <Slider.Root
      className="!mb-[2rem]"
      max={20}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(false)}
    >
      <Slider.Label />
      <div className="tablet:!mb-[1rem] !mb-[.5rem] flex items-center justify-between">
        <h2 className="textPreset3 text-gray-200">Character Lenght</h2>
        <Slider.ValueText
          id="characterLength"
          className="textPreset2 text-green-200"
        />
      </div>
      <Slider.Control>
        <Slider.Track bgColor={`var(--color-gray-850)`}>
          <Slider.Range className="!bg-green-200" />
        </Slider.Track>
        <Slider.Thumb
          bg={"white"}
          className={`${isActive && "!bg-gray-850 !border-green-200"} cursor-pointer`}
          index={0}
        >
          <Slider.HiddenInput />
        </Slider.Thumb>
        <Slider.MarkerGroup>
          <Slider.Marker value={0} />
        </Slider.MarkerGroup>
      </Slider.Control>
    </Slider.Root>
  );
}
