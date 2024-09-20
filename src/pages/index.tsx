import { getAccount } from "@/scripts/controllers/githubController";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAccount();
      console.log(res);
    };
    fetchData();
  }, []);


  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
