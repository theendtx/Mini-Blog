type CardProps = {
    title: string;
    children: React.ReactNode;
};

export default function Card(props: CardProps) {
    return (
        <div>
  <h2>{props.title}</h2>
  {props.children}
</div>
    )
}