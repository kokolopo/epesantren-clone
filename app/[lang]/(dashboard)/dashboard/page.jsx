import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DataStats from "./components/data-stats";
import SimpleTable from "./components/simple-table";
import DefaultPagination from "./components/basic-pagination";
import ProjectBudgetBar from "./components/project-budget-bar";
import UserDeviceReport from "./components/user-device-report";
import CalendarView from "./components/calender-view";
import DatePickerWithRange from "@/components/date-picker-with-range";
import { getCategories, getEvents } from "@/config/calendar.config";
import { Button } from "@/components/ui/button";

const page = () => {
  // const events = await getEvents();
  // const categories = await getCategories();
  return (
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="text-2xl font-medium text-default-800 mt-4">
          Dashboard
        </div>
      </div>

      {/* Card Report */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <DataStats />
          </div>
        </CardContent>
      </Card>

      {/* Data table */}
      <Card className="p-4 border-t-4 border-primary space-y-3">
        <div className="flex items-center flex-wrap gap-4 justify-between">
          {/* <div className="text-2xl font-medium text-default-800">
            Realisasi Akun Pembayaran
          </div> */}
          <CardTitle>Realisasi Akun Pembayaran</CardTitle>

          <div className="flex flex-col items-end space-y-2 w-full sm:w-fit justify-end">
            <DatePickerWithRange />

            <Button color="success" className="w-fit">
              Export XLS
            </Button>
          </div>
        </div>

        <SimpleTable />

        <DefaultPagination />
      </Card>

      {/* Graphic */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6 xl:col-span-5 border-t-4 border-primary">
          <ProjectBudgetBar titleBar="Jurnal Keuangan" />
        </div>
        <div className="col-span-12 lg:col-span-6 xl:col-span-7 border-t-4 border-primary">
          <ProjectBudgetBar titleBar="Jumlah Siswa Tiap Jenjang" />
        </div>
      </div>

      <div className=" grid grid-cols-12 gap-6 divide-x divide-border">
        <Card className="col-span-12 lg:col-span-4 2xl:col-span-3  pb-5">
          <CardHeader className="border-none p-4 pt-5 mb-0">
            <CardTitle className="text-lg font-semibold text-default-900 p-0">
              Device Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="dashtail-legend">
              <UserDeviceReport />
            </div>
          </CardContent>
        </Card>

        {/* <CalendarView events={events?.data} categories={categories?.data} /> */}
      </div>

      {/* Calendar */}
    </div>
  );
};

export default page;
