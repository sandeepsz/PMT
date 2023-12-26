import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import React from "react";
import { db } from "@/lib/db";
import Board from "./Board";

const Organization = async () => {
  const baords = await db.board.findMany();

  return (
    <div>
      <div className="space-y-2">
        {baords.map((board) => (
          <Board key={board.id} title={board.title} id={board.id} />
        ))}
      </div>
    </div>
  );
};

export default Organization;
