import supabase from "./supabase_init";
// NO TOCAR EsTA VAINA O si NO LEs PEGO by douglas

/**
 *
 * This function will get every data from a table on a JSON string
 * @param {string} target
 * @param {string} select
 * @returns query
 */

export async function getSupabase(target, select) {
  return await supabase.from(target).select(select);
}

export async function getAllHomeWorkOf(name, last_name) {
  const { data: student } = await supabase
    .from("students")
    .select()
    .like("Nombres", `%${name}%`)
    .like("Apellidos", `%${last_name}%`)
    .single();

  const studentName = `${student.Nombres.split(" ")[0]} ${
    student.Apellidos.split(" ")[0]
  }`;
  const allWorkFromStorage = await supabase.storage
    .from("blog_storage")
    .list(`task_english/${studentName}`);

  const allWorkFromStorageWithPublicUrl = allWorkFromStorage.data.map(
    (items) => {
      const {data: publicURL, error} = supabase.storage
        .from("blog_storage")
        .getPublicUrl(`task_english/${studentName}/${items.name}`);

      return {
        ...items,
        publicURL: publicURL.publicUrl || "",
      };
    }
  );

  return allWorkFromStorageWithPublicUrl
}
