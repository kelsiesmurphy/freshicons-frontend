import { Button } from "@workspace/ui/components/button";
import React from "react";

export default function PurchaseButton() {
  return (
    <form action="/api/checkout_session" method="POST">
      <Button type="submit" role="link">
        Purchase
      </Button>
    </form>
  );
}
