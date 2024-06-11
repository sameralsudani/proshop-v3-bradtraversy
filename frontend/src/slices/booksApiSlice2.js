export const updateBook = async (bookFormData, id) => {
  const response = await fetch(`/api/books/${id}`, {
    method: 'PUT',
    body: bookFormData,
  });

  if (!response) {
    throw new Error('Failed to update book');
  }

  return response.json();
};

export const addBook = async (bookFormData) => {
  const response = await fetch(`/api/books`, {
    method: 'POST',
    body: bookFormData,
  });

  if (!response) {
    throw new Error('Failed to add book');
  }

  return response.json();
};
