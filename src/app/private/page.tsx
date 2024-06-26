import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { createClient } from "../../../utils/supabase/server";

export default async function PrivatePage() {
  const supabase = createClient(cookies());

  const { data, error } = await supabase.auth.getUser();
  console.log(data);
  if (error || !data?.user) {
    redirect("/login");
  }

  return <p>Hello {data.user.email}</p>;
}
