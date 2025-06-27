"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Heart, FileText } from "lucide-react";

interface AccountTabsProps {
  children: React.ReactNode;
  defaultTab?: string;
}

export function AccountTabs({ children, defaultTab = "account" }: AccountTabsProps) {
  return (
    <Tabs defaultValue={defaultTab} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          Account
        </TabsTrigger>
        <TabsTrigger value="interests" className="flex items-center gap-2">
          <Heart className="h-4 w-4" />
          Interests
        </TabsTrigger>
        <TabsTrigger value="posts" className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          My Posts
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
}