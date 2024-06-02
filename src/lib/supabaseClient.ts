import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_KEY || "";

// const supabaseUrl = "https://okjmmodzagsfhgtbktwy.supabase.co" || "";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ram1tb2R6YWdzZmhndGJrdHd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxNzUzODMsImV4cCI6MjAzMjc1MTM4M30.8y1OwJJ56CmYftVHQCdoykhGHASafm40e_wrxwc_CcY" ||
//   "";

export const supabase = createClient(supabaseUrl, supabaseKey);
