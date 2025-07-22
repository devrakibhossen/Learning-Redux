import Count from "./Count";
import Button from "./Button";

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 backdrop-blur-sm bg-transparent border-gray-900 border  rounded shadow">
      <Count count={count} />
      <div className="flex space-x-3">
        <Button handler={onIncrement}>Increment</Button>
        <Button type="danger" handler={onDecrement}>
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;
