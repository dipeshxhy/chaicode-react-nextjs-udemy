const UserDetailPage = async ({ params }) => {
  const { userId } = await params;
  return <div>UserDetailPage: {userId}</div>;
};
export default UserDetailPage;
