const URI = "https://api.github.com/users/leoneldonati/repos";

export const getRepos = async () => {
  try {
    const res = await fetch(URI);
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
