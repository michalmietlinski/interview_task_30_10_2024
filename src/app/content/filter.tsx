export default function Filter({
  initialValue,
  setNewValue,
  csValue,
  setCSValue,
}: {
  initialValue: string;
  setNewValue: (val: string) => void;
  csValue: boolean;
  setCSValue: (val: boolean) => void;
}) {
  return (
    <div className="flex flex-row space-between gap-8">
      <div>
        <b tabIndex={0} className="mr-4">
          Beneficiary
        </b>
        <input
          onChange={(e) => setNewValue(e.target.value)}
          type="text"
          value={initialValue}
        ></input>
      </div>
      <div>
        <b tabIndex={0} className="mr-4">
          Case sensitive?
        </b>
        <input
          onChange={(e) => setCSValue(e.target.checked)}
          type="checkbox"
          checked={csValue}
        ></input>
      </div>
    </div>
  );
}
