import { useState } from "react";
import Stats from "./components/Stats";
import Counter from "./components/Counter";

const initialCounters = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

const App = () => {
  const [counters, setCounters] = useState(initialCounters);

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  const handleIncrement = (counterId) => {
    const updatedCounter = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value + 1,
        };
      }
      return counter;
    });
    setCounters(updatedCounter);
  };

  const handleDecrement = (counterId) => {
    const updatedCounter = counters.map((counter) => {
      if (counter.id === counterId) {
        if (counter.value === 0) {
          alert("Value cannot be less than 0");
          return counter;
        }
        return {
          ...counter,
          value: counter.value - 1,
        };
      }
      return counter;
    });
    setCounters(updatedCounter);
  };

  return (
    <div className="min-h-screen w-full bg-white relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.3), transparent)
      `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />

      <div className="relative z-10 w-full h-full p-10 text-violet-600">
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
        </div>
      </div>
    </div>
  );
};

export default App;
