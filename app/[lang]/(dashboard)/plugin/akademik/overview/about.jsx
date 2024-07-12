"use client";
import { UserSign, Web, Mail2 } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center mb-3 border-none">
        <CardTitle className="text-lg font-medium text-default-800">
          Tentang
        </CardTitle>
        <Button
          size="icon"
          className="w-6 h-6 bg-default-100 dark:bg-default-50 text-default-500 hover:bg-default-100"
        >
          <Icon icon="heroicons:ellipsis-vertical" className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-default-600 mb-3">
          Plugin Akademik adalah fitur perangkat lunak yang dirancang untuk
          memfasilitasi kegiatan akademik di lingkungan pendidikan. Plugin ini
          menawarkan berbagai fungsi yang mendukung proses belajar mengajar,
          evaluasi, dan administrasi akademik. Dengan manajemen kurikulum,
          pengguna dapat menyusun, mengedit, dan mengelola kurikulum akademik
          secara terstruktur, serta mengintegrasikannya dengan silabus dan
          rencana pembelajaran.
        </div>
        <div className="text-sm text-default-600">
          Dengan fitur keamanan dan privasi, Plugin Akademik Selah menjamin
          keamanan data melalui enkripsi dan kebijakan akses berbasis peran,
          serta kepatuhan terhadap regulasi privasi data seperti GDPR. Dirancang
          untuk mempermudah pengelolaan dan pelaksanaan kegiatan akademik,
          plugin ini meningkatkan efisiensi dan memberikan pengalaman belajar
          yang lebih baik bagi siswa dan pengajar
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-6 2xl:gap-16">
          {[
            {
              title: "Designation",
              position: "Lead UX/UI Designer",
              icon: UserSign,
            },
            {
              title: "Designation",
              position: "Lead UX/UI Designer",
              icon: Web,
            },
            {
              title: "Mail",
              position: "me.fahmi30@gmail.com",
              icon: Mail2,
            },
          ].map((item, index) => (
            <div key={`about-${index}`} className="flex items-center gap-2">
              <div className="bg-default-100 dark:bg-default-50 text-primary h-10 w-10 grid place-content-center rounded">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-medium text-default-800 ">
                  {item.title}
                </div>
                <div className="text-xs font-medium text-default-600">
                  {item.position}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default About;
