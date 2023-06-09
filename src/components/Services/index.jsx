import { BoxServices } from "./BoxServices";

export function Services(){
  return(
    <div className="flex items-center justify-center gap-4 flex-wrap py-12 sm:-mt-16">
      <BoxServices title={"Qualidade de vida"}/>
      <BoxServices title={"Exames"}/>
      <BoxServices title={"Cirúrgia"}/>
      <BoxServices title={"Pediatria"}/>
    </div>
  )
}