type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export default function Input(props: InputProps) {
  return (
    <input
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}