import supabase from "./supabase";

export async function getRanking() {
  const { data, error } = await supabase.from("ranking").select("*").single();

  if (error) {
    console.log(error);
    throw new Error("Ranking could not be loaded");
  }

  return data;
}

export async function updateRanking(newPlayer) {
  const { data, error } = await supabase
    .from("ranking")
    .insert({ ...newPlayer })
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error("Ranking could not be updated");
  }

  return data;
}
