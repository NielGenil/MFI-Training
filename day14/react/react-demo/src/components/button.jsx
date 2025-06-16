const Button = (props) => {

  return (
    <button className={`text-white font-bold py-2 px-4 rounded ${
      props.color == "primary"
      ? "bg-blue-500"
      : props.color === "secondary"
      ? "bg-gray-500"
      : "bg-white"
    }`}>
      {props.label}
    </button>
  );
}

export default Button;

// export const Button = (props) => {

//   return (
//     <button className={`text-white font-bold py-2 px-4 rounded ${
//       props.color == "primary"
//       ? "bg-blue-500"
//       : props.color === "secondary"
//       ? "bg-gray-500"
//       : "bg-white"
//     }`}>
//       {props.label}
//     </button>
//   );
// }

