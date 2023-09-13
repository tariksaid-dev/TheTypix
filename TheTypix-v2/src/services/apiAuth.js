import supabase from "./supabase";

export async function login({ username, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    username,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function signup({ username, password, email }) {
  const { data, error } = await supabase.auth.signUp({
    username,
    password,
    email,
  });

  if (error) throw new Error(error.message);

  return data;
}
