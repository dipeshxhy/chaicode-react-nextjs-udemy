export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const body = await request.json();
  const { title, completed } = body;
  if (!title || typeof title !== 'string' || typeof completed !== 'boolean') {
    return Response.json({ message: 'Invalid request body' }, { status: 400 });
  }
  const updatedTodo = { title, completed };
  // Do something with the request body, e.g., update it in a database
  return Response.json(
    { message: 'Todo updated successfully!', data: updatedTodo },
    { status: 200 },
  );
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  // Do something with the id, e.g., delete it from a database
  return Response.json({ message: `Todo with id ${id} deleted successfully!` }, { status: 200 });
}
