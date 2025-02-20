import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://anoroepxakmwkcgudfew.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFub3JvZXB4YWttd2tjZ3VkZmV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwNTY2OTgsImV4cCI6MjA1NTYzMjY5OH0.OlhQh5GxRnMRt215IdBZ_xK3iB6OdU_EI6fVwo6mPYY';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
