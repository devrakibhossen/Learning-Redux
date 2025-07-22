export const getPosts = async () => {
  const response = await fetch(
    "https://alqafilaserver.up.railway.app/api/v1/posts"
  );
  return response.json();
};
