import { getProfile } from "@/lib/actions";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

import React from "react";

const ProfilePage = async () => {
  const session = await getSession();
  if (!session || !session.user) redirect("/auth/signin");
  const res = await getProfile();
  return (
    <div>
      ProfilePage
      <p>{JSON.stringify(res)}</p>
    </div>
  );
};

export default ProfilePage;
