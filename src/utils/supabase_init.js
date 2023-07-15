import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jmietyteyezuzurkaacb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptaWV0eXRleWV6dXp1cmthYWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQwMDI2MTAsImV4cCI6MTk5OTU3ODYxMH0.MZf_rO7et9P62PihZyhzkm02RNb1P8Cwd2AD9yaKah4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
