/* eslint-disable  */
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

export function getAllHomeWorkOf(name, last_name) {
  const studentName = `${name.split(" ")[0]} ${last_name.split(" ")[0]}`;
  const allWorkFromStorageWithPublicUrl = [];

  supabase.storage
    .from("blog_storage")
    .list(`task_english/${studentName}`)
    .then(({ data: allWorkFromStorage, error }) => {
      if (error) return error;

      allWorkFromStorage.map((items) => {
        const { data: publicURL } = supabase.storage
          .from("blog_storage")
          .getPublicUrl(`task_english/${studentName}/${items.name}`);

        allWorkFromStorageWithPublicUrl.push({
          ...items,
          publicURL: publicURL.publicUrl || "",
        });
      });
    })
    .catch((error) => console.error(error));
  return allWorkFromStorageWithPublicUrl;
}

// esta mielda ni la toquen que da cancer
export function getImages() {
  const data = [];

  supabase.storage
    .from("blog_storage")
    .list(`image`)
    .then(({ data: dataImages, error }) => {
      if (error) return error;

      dataImages.map((items) => {
        const { data: publicURL } = supabase.storage
          .from("blog_storage")
          .getPublicUrl(`image/${items.name}`);

          data.push({
          publicURL: publicURL.publicUrl || "",
        }); 
      });
    })
    .catch((error) => console.error(error));
  return data;
}

// NO TOCAR EsTA VAINA O si NO LEs PEGO by douglas
// porque el pene de mi perro sabe igual a culo de mi padre

/**
 *
 * @param {String} path
 * @returns {StorageError | Blob}
 */
export async function downloadMarkdownPost(path) {
  try {
    const { data, error } = await supabase.storage
      .from("blog_storage")
      .download(path);

    if (error) {
      throw error;
    }
    console.log("fulvo", data);
    return data;
  } catch (error) {
    console.debug(error);
  }
}
