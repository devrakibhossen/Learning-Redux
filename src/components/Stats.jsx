const Stats = ({ totalCount }) => {
  return (
    <div className="px-4 py-10 h-auto text-2xl font-semibold flex flex-col items-center justify-center space-y-5   backdrop-blur-sm bg-transparent border-gray-900 border rounded shadow">
      Total Number : {totalCount}
    </div>
  );
};

export default Stats;
