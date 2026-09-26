type ButtonProps = {
    text: string;
    onClick: () => void;
};

export default function Button(props: ButtonProps) {
    return(
        <button onClick={props.onClick}>
            {props.text}
        </button>
    );
}