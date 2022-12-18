export const Filter = ({ value, setFilter }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => {
          setFilter(e.target.value);
        }}
      />
    </div>
  );
};
