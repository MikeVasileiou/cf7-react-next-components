

// type Props = {
//     title: string;
//     description: string;
// }

type A = {
    title: string;
}
type B = {
    description: string;
}
type Props = A & B;

const ArrowFunctionalComponentWithPropsType = ({ title, description }: Props) => {

    return (
    <>
    <h1 className="text-center text-s font-bold mt-12"> {title}</h1>;
     <p className="text-center text-s font-bold mt-12">{description} </p>
    </>
)
}

export default ArrowFunctionalComponentWithPropsType