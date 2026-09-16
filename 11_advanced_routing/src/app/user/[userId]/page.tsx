const SingleUserPage = async ({ params }: { params: { userId: string } }) => {
  const { userId } = await params;
  return <div>SingleUserPage {userId}</div>;
};
export default SingleUserPage;
