const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-md mx-auto">
      <h1>Auth Layout</h1>
      {children}
    </div>
  );
};
export default authLayout;
