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
  const studentName = `${name.split(" ")[0]} ${last_name.split(" ")[0]}`;

  const { data: allWorkFromStorage, error } = await supabase.storage
    .from("blog_storage")
    .list(`task_english/${studentName}`);

  const allWorkFromStorageWithPublicUrl = [];
  allWorkFromStorage.map(async (items) => {
    const { data: publicURL, error } = await supabase.storage
      .from("blog_storage")
      .getPublicUrl(`task_english/${studentName}/${items.name}`);

    if (error) throw error;
    
    return allWorkFromStorageWithPublicUrl.push({
      ...items,
      publicURL: publicURL.publicUrl || "",
    });
  });
  
  return allWorkFromStorageWithPublicUrl;
}
