import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;

/* supabase instance that connects to supabase project */
const supabase = createClient(supabaseURL, supabaseAnonKey);
export default supabase;