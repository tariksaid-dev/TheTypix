import supabase from "./supabase";

export async function login({ username, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    username,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function signup({ username, password }) {
  const { data, error } = await supabase.auth.signUp({
    username,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}
