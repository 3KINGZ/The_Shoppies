import { useSelector } from "react-redux";
import { Movies } from "../../components";

export const Nominations = () => {
  const { nominations } = useSelector((state: any) => state.nominations);

  return (
    <div style={{ width: "100%", paddingTop: 10 }}>
      <h1>Nominations</h1>
      <Movies data={nominations} />
    </div>
  );
};
