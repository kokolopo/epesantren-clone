"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BasicDataTable from "./basic-table";
import { Search } from "lucide-react";

const SelectUnit = () => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a unit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="english">All</SelectItem>
        <SelectItem value="mathmatics">Paud</SelectItem>
        <SelectItem value="physics">SMP</SelectItem>
        <SelectItem value="chemistry">SMA</SelectItem>
      </SelectContent>
    </Select>
  );
};

const SelectGrade = () => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a grade" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="english">All</SelectItem>
        <SelectItem value="mathmatics">Madin</SelectItem>
        <SelectItem value="physics">Mahad</SelectItem>
        <SelectItem value="chemistry">SMA/SMK</SelectItem>
      </SelectContent>
    </Select>
  );
};

const page = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="text-2xl font-medium text-default-800 mt-4 ">Kelas</div>

        <div className="flex flex-col items-end space-y-2 w-full justify-end sm:flex-row sm:w-[40vw] sm:gap-3 ">
          {/* select dropdown */}
          <SelectUnit />
          <SelectGrade />
          <Button>
            {/* <Icon icon="heroicons:heart-20-solid" className="w-6 h-6 mr-2  " /> */}
            <Search className="w-6 h-6 mr-2" />
            Search
          </Button>
        </div>
      </div>

      {/*  */}
      <Card>
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <BasicDataTable />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
