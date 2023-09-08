import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jruvnbcpzuupoicfcpkp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpydXZuYmNwenV1cG9pY2ZjcGtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxOTA2MTAsImV4cCI6MjAwOTc2NjYxMH0.9LA20ZDb-A6OdWT4mWyZvEIOQ5ARam5VJbbrGQFWjwU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
