import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

const supabase = createClient(url, key, {
  auth: {
    persistSession: false,
  },
});

export const SupabaseImageUpload = async (file: File) => {
  const filename = `${uuidv4()}-${file?.name}`;

  const { data, error } = await supabase.storage
    .from("dpsresto")
    .upload("public/" + filename, file as File);
  if (data) {
    console.log(data);
  } else if (error) {
    console.log(error);
  }

  const filepath = data?.path;
  const { data: clientUrl } = supabase.storage
    .from("dpsresto")
    .getPublicUrl(`${filepath}`);

  return clientUrl.publicUrl;
};

export const SupabaseImageDelete = async (file: string) => {
  const { data, error } = await supabase.storage
    .from("dpsresto")
    .remove([`public/${file}`]);

  console.log(data);
};