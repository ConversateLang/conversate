import { createClient } from "@supabase/supabase-js";

const supUrl = import.meta.env.VITE_SUPABASE_URL;
const supKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supUrl, supKey);