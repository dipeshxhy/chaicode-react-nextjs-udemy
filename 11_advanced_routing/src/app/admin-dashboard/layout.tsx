const AdminLayout = ({
  children,
  analytics,
  teams,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  teams: React.ReactNode;
}) => {
  return (
    <div className="flex min-h-screen">
      <div className=" bg-zinc-700 min-h-screen text-white text-center w-1/2">{children}</div>
      <div className="flex flex-col w-full overflow-y-auto h-screen">
        {analytics}
        {teams}
      </div>
    </div>
  );
};
export default AdminLayout;
