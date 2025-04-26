type Props = {
  strength: number;
};

export default function Difficulty({ strength }: Props) {
  const emptyBox = 4 - strength;
  const wordStrength = (level: number) => {
    switch (level) {
      case 1:
        return ["TOO WEAK!", "bg-red-500 !border-red-500"];
      case 2:
        return ["WEAK", "bg-orange-400 !border-orange-400"];
      case 3:
        return ["MEDIUM", "bg-yellow-300 !border-yellow-300"];
      case 4:
        return ["STRONG", "bg-green-200 !border-green-200"];
      default:
        return ["", "bg-none !border-white"];
    }
  };
  return (
    <>
      <p className="textPreset4 cursor-default text-gray-600">STRENGTH</p>
      <div className="flex items-center gap-[.5em]">
        <p>{wordStrength(strength)[0]}</p>
        {Array.from({ length: strength }).map((_box, index) => (
          <div
            className={`${wordStrength(strength)[1]} h-[1.75em] w-[0.625em] !border-2`}
            key={index}
          ></div>
        ))}
        {Array.from({ length: emptyBox }).map((_box, index) => (
          <div
            className={`h-[1.75em] w-[0.625em] !border-2 !border-white`}
            key={index}
          ></div>
        ))}
      </div>
    </>
  );
}
