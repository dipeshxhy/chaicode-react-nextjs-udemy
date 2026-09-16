const SinglePostPage = async ({ params }: { params: { userId: string; postId: string } }) => {
  const { userId, postId } = await params;
  return (
    <div>
      SinglePostPage {userId} {postId}
    </div>
  );
};
export default SinglePostPage;
