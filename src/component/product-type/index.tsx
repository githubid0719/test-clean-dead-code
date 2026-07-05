import  { TypeB } from "./typeB";
import  { TypeA } from "./typeA";
import { TypeC } from "./typeC";

export const ProductTypeRender = (props: { type: string }) => {
  const { type } = props;
  switch (type) {
    case "typeA":
      return <TypeA />;
    case "typeB":
      return <TypeB />;
    case "typeC":
      return <TypeC />;
    default:
      return <div>ProductTypeRender</div>;
  }
};