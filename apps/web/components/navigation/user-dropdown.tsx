import { UserButton } from "@clerk/nextjs";
import { HelpCircle } from "lucide-react";
import React from "react";

export default function UserDropdown() {
  return (
    <UserButton>
      <UserButton.MenuItems>
        <UserButton.Action
          label="Help"
          labelIcon={<HelpCircle />}
          open="help"
        />
      </UserButton.MenuItems>
      <UserButton.UserProfilePage
        label="Help"
        labelIcon={<HelpCircle />}
        url="help"
      >
        <div>
          <h1>Help Page</h1>
          <p>This is the custom help page</p>
        </div>
      </UserButton.UserProfilePage>
    </UserButton>
  );
}
