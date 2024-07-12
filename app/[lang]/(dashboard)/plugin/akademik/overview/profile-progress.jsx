"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import React from "react";

const ProfileProgress = () => {
  return (
    <Card>
      <CardHeader className="border-none mb-0">
        <CardTitle className="text-lg font-medium text-default-800">
          Masa Tenggang
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <div className="flex flex-col items-end gap-1">
          <Label className="text-sm font-medium text-default-700">
            0 hari tersisa
          </Label>
          <Progress value={0} color="primary" isStripe className="w-full" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileProgress;
