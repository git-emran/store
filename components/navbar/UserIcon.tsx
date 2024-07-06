import React from "react";
import { LuUser2 } from "react-icons/lu";
import { currentUser, auth } from "@clerk/nextjs/server";
import Image from "next/image";

async function UserIcon() {
  // const {userId} = auth();

  const user = await currentUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="Profile Image"
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }

  return (
    <div>
      <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />
    </div>
  );
}

export default UserIcon;

