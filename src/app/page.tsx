"use client";

import Image from "next/image";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import { addData, fetchData } from "../../server/actions";
import { useState } from "react";

export default function Home() {
  const [newData, setNewData] = useState("");
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery("data", fetchData);

  const mutation = useMutation(addData, {
    onSuccess: () => {
      // Inwalidacja i odświeżenie danych po pomyślnym dodaniu nowego elementu
      queryClient.invalidateQueries("data");
    },
  });

  console.log(data, isLoading, isError, error);

  const handleAddData = () => {
    mutation.mutate(newData);
    setNewData("");
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-5 flex-col">
        {data?.map((item: { user: string }) => (
          <span key={item.user} className="bg-pink-500">
            {item.user}
          </span>
        ))}
      </div>
      <input
        type="text"
        value={newData}
        onChange={(e) => setNewData(e.target.value)}
        placeholder="New Data"
      />
      <button onClick={handleAddData}>Add Data</button>
    </main>
  );
}
