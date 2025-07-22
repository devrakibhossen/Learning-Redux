import Stats from "./components/Stats";
import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counters/countersSlice";
import Posts from "./components/Posts";

const App = () => {
  const counters = useSelector((sate) => sate.counters);
  const dispatch = useDispatch();
  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };

  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };

  return (
    <div className="min-h-screen w-full bg-black relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(63, 63, 63, 0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(35, 35, 36, 0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.3), transparent)
      `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />

      <div className="relative z-10 w-full h-full p-10 text-white">
        <h1 className="text-2xl font-bold text-center">
          Simple Counter Application
        </h1>
        <div className="max-w-md mx-auto mt-10 space-y-5">
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              count={counter.value}
              onIncrement={() => handleIncrement(counter.id)}
              onDecrement={() => handleDecrement(counter.id)}
            />
          ))}
          <Stats totalCount={totalCount} />
           <h1 className="text-2xl font-bold text-center">
          Posts
        </h1>
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default App;
