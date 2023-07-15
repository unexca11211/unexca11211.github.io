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
