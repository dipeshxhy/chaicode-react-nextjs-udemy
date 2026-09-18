export async function POST(request: Request) {
  const body = await request.json();
  const { title, completed } = body;
  if (!title || typeof title !== 'string' || typeof completed !== 'boolean') {
    return Response.json({ message: 'Invalid request body' }, { status: 400 });
  }
  const newTodo = { title, completed };
  // Do something with the request body, e.g., save it to a database
  return Response.json({ message: 'Todo created successfully!', data: newTodo }, { status: 201 });
}
