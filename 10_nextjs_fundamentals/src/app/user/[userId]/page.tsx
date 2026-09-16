const UserDetailPage = async ({ params }: { params: Promise<{ userId: string }> }) => {
  const { userId } = await params;
  return <div>UserDetailPage: {userId}</div>;
};
export default UserDetailPage;
