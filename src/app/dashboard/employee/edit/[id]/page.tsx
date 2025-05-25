// app/dashboard/employee/edit/[id]/page.tsx
"use client";

import EditEmployeeForm from "./EditEmployeeForm";
import { useParams } from "next/navigation";

export default function EditEmployeePage() {
  const params = useParams();
  const id = params.id as string;

  if (!id) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        Invalid Employee ID
      </div>
    );
  }

  return <EditEmployeeForm id={id} />;
}
