import Header from "@/components/Header";
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
    <main>
      <Header />
    </main>
  );
}
