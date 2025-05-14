import EditEmployeeForm from './EditEmployeeForm';

export default function EditEmployeePage({
  params,
}: {
  params: { id: string };
}) {
  return <EditEmployeeForm id={params.id} />;
} 