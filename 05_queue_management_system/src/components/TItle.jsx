const TItle = ({ title, desc }) => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold ">{title}</h1>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
};
export default TItle;
