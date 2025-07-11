"use client";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.hello.queryOptions({ name: "Rizon!!!" }));
  return (
    <div className="text-red-500 font-bold">
      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export default Page;
